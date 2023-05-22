const express = require("express");
const router = express.Router();
const validurl = require("valid-url");
const shortid = require("shortid");

const Url = require("../models/url");


router.get("/:shorturl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shorturl });

    if (url) {
      url.clicks++
      await url.save()
      return res.redirect(url.originalUrl);
    } else {
      return res.send({ status: "Url not found!" });
    }
  } catch (e) {
    return res.send({ status: "Something went wrong!!" });
  }
});

router.get("/find/:shorturl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shorturl });

    if (url) {
      return res.send(url);
    } else {
      return res.send({ status: "Url not found!" });
    }
  } catch (e) {
    return res.json({ status: "Something went wrong!!" });
  }
});


router.post(`/${process.env.API_KEY}/api/v1/oldurl`, async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!validurl.isUri(originalUrl)) {
      return res.send({ status: "Invalid url" });
    }

    const url = await Url.findOne({ originalUrl });

    if (url) {
      return res.send(url);
    }
    const shortUrl = shortid.generate();
    const newUrl = new Url({
      originalUrl,
      shortUrl,
      status:"Success"
    });

    await newUrl.save();

    return res.send(newUrl);
  } catch (e) {
    return res.send({ status: "Something went wrong:(" });
  }
});

module.exports = router;
