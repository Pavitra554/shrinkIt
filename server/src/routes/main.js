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
      return res.status(404).send({ Error: "Url not found!" });
    }
  } catch (e) {
    return res.send(404).send({ Error: "Something went wrong!!" });
  }
});

router.post("/api/v1/oldurl", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!validurl.isUri(originalUrl)) {
      return res.send(400).send({ Error: "Invalid url" });
    }

    const url = await Url.findOne({ originalUrl });

    if (url) {
      return res.send(url);
    }
    const shortUrl = shortid.generate();
    const newUrl = new Url({
      originalUrl,
      shortUrl,
    });

    await newUrl.save();

    return res.send(newUrl);
  } catch (e) {
    return res.status(400).send({ Error: "Something went wrong:(" });
  }
});

module.exports = router;
