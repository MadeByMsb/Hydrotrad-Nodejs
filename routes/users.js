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


router.get("/branches", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  branches = await adminHelper.getAllbranches();
  res.render("users/branches", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories, branches });
});

/* GET home page. */
router.get("/prd-view/:name", async function (req, res, next) {
  let user = req.session.user;
  let cat = req.params.name;
  await userHelper.getProductsByCategory(cat).then(async (products) => {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    banners = await adminHelper.getAllbanners();
    abouts = await adminHelper.getAllabouts();
    contacts = await adminHelper.getAllcontacts();
    sones = await adminHelper.getAllsones();
    categories = await adminHelper.getAllcategories();
    res.render("users/prd-view", { admin: false, sites, cat, abouts, contacts, sones, categories, socials, user, banners, products });

  })
});

router.get("/mixers-sanitary-accessories", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  res.render("users/mixers-sanitary-accessories", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});

router.get("/hand-tools-equipments", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  res.render("users/hand-tools-equipments", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});

router.get("/hardwares-safety-equipments", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  res.render("users/hardwares-safety-equipments", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});

router.get("/pipes-fittings", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  res.render("users/pipes-fittings", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});


router.get("/career", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();
  res.render("users/career", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});



/* GET home page. */
router.get("/", async function (req, res, next) {
  let user = req.session.user;
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  banners = await adminHelper.getAllbanners();
  abouts = await adminHelper.getAllabouts();
  products = await adminHelper.getAllproducts();
  contacts = await adminHelper.getAllcontacts();
  sones = await adminHelper.getAllsones();
  categories = await adminHelper.getAllcategories();

  res.render("users/home", { admin: false, sites, socials, user, banners, abouts, products, contacts, sones, categories });
});

router.get("/about-us", async function (req, res, next) {
  sites = await adminHelper.getAllsites();
  socials = await adminHelper.getAllsocials();
  abouts = await adminHelper.getAllabouts();
  contacts = await adminHelper.getAllcontacts();
  categories = await adminHelper.getAllcategories();
  res.render("users/about-us", { admin: false, sites, socials, abouts, contacts, categories });
}),

  router.get("/contact-us", async function (req, res, next) {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    contacts = await adminHelper.getAllcontacts();
    categories = await adminHelper.getAllcategories();
    res.render("users/contact-us", { admin: false, sites, socials, contacts, categories });
  }),

  router.get("/products", async function (req, res, next) {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    products = await adminHelper.getAllproducts();
    contacts = await adminHelper.getAllcontacts();
    categories = await adminHelper.getAllcategories();
    res.render("users/products", { admin: false, sites, socials, products, contacts, categories });
  }),

  router.get("/service", async function (req, res, next) {
    sites = await adminHelper.getAllsites();
    socials = await adminHelper.getAllsocials();
    products = await adminHelper.getAllproducts();
    contacts = await adminHelper.getAllcontacts();
    categories = await adminHelper.getAllcategories();
    res.render("users/service", { admin: false, sites, socials, products, contacts, categories });
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
