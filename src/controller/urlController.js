const validUrl = require('valid-url')
const shortid = require('shortid')
const URLModel = require("../model/urlModel")
const redis = require("redis")

const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
    16368,
    "redis-16368.c15.us-east-1-2.ec2.cloud.redislabs.com",
    { no_ready_check: true }
);
redisClient.auth("Y52LH5DG1XbiVCkNC2G65MvOFswvQCRQ", function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
});



const isValid = function (value) {
    if (typeof (value) === undefined || typeof (value) === null) return false
    if (typeof (value) === "string" && (value).trim().length > 0) return true
}

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);

const urlShortener = async (req, res) => {
    try {
        const baseUrl = 'http://localhost:3000'

        const data = req.body
        if (Object.keys(data) == 0) {
            return res.status(400).send({ status: false, message: "Please provide Data" })
        }

        const longUrl = req.body.longUrl

        if (!isValid(longUrl)) {
            return res.status(400).send({ status: false, message: "Please provide URL" })
        }

        if (!validUrl.isUri(longUrl)) {
            return res.status(401).send({ status: false, message: "Please provide valid Url" })
        }

        const urlGenerated = shortid.generate()
        const urlCode = urlGenerated.trim().toLowerCase()

        let url = await URLModel.findOne({ longUrl }).select({ _id: 0, __v: 0 })

        if (url) {
            res.status(200).send({ status: true, data: url })
        }

        else {
            const shortUrl = baseUrl + '/' + urlCode

            //data['shortUrl'] = shortUrl
            //data['urlCode'] = urlCode
            //const a1 = { longUrl, shortUrl, urlCode }
            const obj = {
                urlCode,
                longUrl,
                shortUrl
            }

            const urlData = await URLModel.create(obj)
            //const n1 = { longUrl: urlData.longUrl, shortUrl: urlData.shortUrl, urlCode: urlData.urlCode }

            return res.status(201).send({ status: true, data: urlData })
        }

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: error.message })
    }
}

const redirect = async function (req, res) {
    try {
        const urlCode = req.params.urlCode;

        if (Object.keys(urlCode) == 0) { return res.status(400).send({ status: false, message: 'Please provide URL Code in Params' }) }

        let cachedMemory = await GET_ASYNC(`${urlCode}`)
        if (cachedMemory) { return res.status(302).redirect(JSON.parse(cachedMemory)) }

        const URL = await URLModel.findOne({ urlCode: urlCode })

        if (!URL) { return res.status(404).send({ status: false, message: 'No URL found with this URL Code. Please check input and try again' }) }

        await SET_ASYNC(`${urlCode}`, JSON.stringify(URL.longUrl));

        return res.status(302).redirect(URL.longUrl);

    }

    catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {urlShortener, redirect}