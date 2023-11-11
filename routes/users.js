var express = require("express");
var userHelper = require("../helper/userHelper");
var adminHelper = require("../helper/adminHelper");

var router = express.Router();

const verifySignedIn = (req, res, next) => {
  if (req.session.signedIn) {
    next();
  } else {
    res.redirect("/signin");
  }
};

/* GET home page. */
router.get("/", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  res.render("users/home", { admin: false, sites, socials, user, banners, abouts });
});

router.get("/about-us", async function (req, res, next) {
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  res.render("users/about-us", { admin: false, sites, socials, });
}),

  router.get("/contact-us", async function (req, res, next) {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    res.render("users/contact-us", { admin: false, sites, socials, });
  }),

  router.get("/products", async function (req, res, next) {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    res.render("users/products", { admin: false, sites, socials, });
  }),



  router.get("/signup", function (req, res) {
    if (req.session.signedIn) {
      res.redirect("/");
    } else {
      res.render("users/signup", { admin: false });
    }
  });

router.post("/signup", function (req, res) {
  userHelper.doSignup(req.body).then((response) => {
    req.session.signedIn = true;
    req.session.user = response;
    res.redirect("/");
  });
});

router.get("/signin", function (req, res) {
  if (req.session.signedIn) {
    res.redirect("/");
  } else {
    res.render("users/signin", {
      admin: false,
      signInErr: req.session.signInErr,
    });
    req.session.signInErr = null;
  }
});

router.post("/signin", function (req, res) {
  userHelper.doSignin(req.body).then((response) => {
    if (response.status) {
      req.session.signedIn = true;
      req.session.user = response.user;
      res.redirect("/");
    } else {
      req.session.signInErr = "Invalid Email/Password";
      res.redirect("/signin");
    }
  });
});

router.get("/signout", function (req, res) {
  req.session.signedIn = false;
  req.session.user = null;
  res.redirect("/");
});



router.post("/search", verifySignedIn, async function (req, res) {
  let user = req.session.user;
  let userId = req.session.user._id;
  let cartCount = await userHelper.getCartCount(userId);
  userHelper.searchProduct(req.body).then((response) => {
    res.render("users/search-result", { admin: false, user, cartCount, response });
  });
});

module.exports = router;
