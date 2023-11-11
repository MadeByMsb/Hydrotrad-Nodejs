var express = require("express");
var adminHelper = require("../helper/adminHelper");
var fs = require("fs");
const userHelper = require("../helper/userHelper");
var router = express.Router();

const verifySignedIn = (req, res, next) => {
  if (req.session.signedInAdmin) {
    next();
  } else {
    res.redirect("/admin/signin");
  }
};

/* GET admins listing. */
router.get("/", verifySignedIn, function (req, res, next) {
  let administator = req.session.admin;
  adminHelper.getAllProducts().then((products) => {
    res.render("admin/home", { admin: true, layout: "adminlayout", products, administator });
  });
});


///////ALL sone/////////////////////                                         
router.get("/all-sones", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllsones().then((sones) => {
    res.render("admin/sone/all-sones", { admin: true, layout: "adminlayout", sones, administator });
  });
});

///////ADD sectionone/////////////////////                                         
router.get("/add-sone", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/sone/add-sone", { admin: true, layout: "adminlayout", administator });
});

///////ADD sectionone/////////////////////                                         
router.post("/add-sone", function (req, res) {
  adminHelper.addsone(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/sone-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/sone/all-sones");
      } else {
        console.log(err);
      }
    });
  });
});

///////EDIT sectionone/////////////////////                                         
router.get("/edit-sone/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let soneId = req.params.id;
  let sone = await adminHelper.getsoneDetails(soneId);
  console.log(sone);
  res.render("admin/sone/edit-sone", { admin: true, layout: "adminlayout", sone, administator });
});

///////EDIT sectionone/////////////////////                                         
router.post("/edit-sone/:id", verifySignedIn, function (req, res) {
  let soneId = req.params.id;
  adminHelper.updatesone(soneId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/sone-images/" + soneId + ".png");
      }
    }
    res.redirect("/admin/sone/all-sones");
  });
});

///////DELETE sectionone/////////////////////                                         
router.get("/delete-sone/:id", verifySignedIn, function (req, res) {
  let soneId = req.params.id;
  adminHelper.deletesone(soneId).then((response) => {
    fs.unlinkSync("./public/images/sone-images/" + soneId + ".png");
    res.redirect("/admin/sone/all-sones");
  });
});

///////DELETE ALL sectionone/////////////////////                                         
router.get("/delete-all-sones", verifySignedIn, function (req, res) {
  adminHelper.deleteAllsones().then(() => {
    res.redirect("/admin/sone/all-sones");
  });
});


///////ALL about/////////////////////                                         
router.get("/all-abouts", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllabouts().then((abouts) => {
    res.render("admin/about/all-abouts", { admin: true, layout: "adminlayout", abouts, administator });
  });
});

///////ADD About/////////////////////                                         
router.get("/add-about", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/about/add-about", { admin: true, layout: "adminlayout", administator });
});

///////ADD About/////////////////////                                         
router.post("/add-about", function (req, res) {
  adminHelper.addabout(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/about-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/about/all-abouts");
      } else {
        console.log(err);
      }
    });
  });
});

///////EDIT About/////////////////////                                         
router.get("/edit-about/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let aboutId = req.params.id;
  let about = await adminHelper.getaboutDetails(aboutId);
  console.log(about);
  res.render("admin/about/edit-about", { admin: true, layout: "adminlayout", about, administator });
});

///////EDIT About/////////////////////                                         
router.post("/edit-about/:id", verifySignedIn, function (req, res) {
  let aboutId = req.params.id;
  adminHelper.updateabout(aboutId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/about-images/" + aboutId + ".png");
      }
    }
    res.redirect("/admin/about/all-abouts");
  });
});

///////DELETE About/////////////////////                                         
router.get("/delete-about/:id", verifySignedIn, function (req, res) {
  let aboutId = req.params.id;
  adminHelper.deleteabout(aboutId).then((response) => {
    fs.unlinkSync("./public/images/about-images/" + aboutId + ".png");
    res.redirect("/admin/about/all-abouts");
  });
});

///////DELETE ALL About/////////////////////                                         
router.get("/delete-all-abouts", verifySignedIn, function (req, res) {
  adminHelper.deleteAllabouts().then(() => {
    res.redirect("/admin/about/all-abouts");
  });
});


///////ALL banner/////////////////////                                         
router.get("/all-banners", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllbanners().then((banners) => {
    res.render("admin/banner/all-banners", { admin: true, layout: "adminlayout", banners, administator });
  });
});

///////ADD Banner/////////////////////                                         
router.get("/add-banner", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/banner/add-banner", { admin: true, layout: "adminlayout", administator });
});

///////ADD Banner/////////////////////                                         
router.post("/add-banner", function (req, res) {
  adminHelper.addbanner(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/banner-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/banner/all-banners");
      } else {
        console.log(err);
      }
    });
  });
});

///////EDIT Banner/////////////////////                                         
router.get("/edit-banner/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let bannerId = req.params.id;
  let banner = await adminHelper.getbannerDetails(bannerId);
  console.log(banner);
  res.render("admin/banner/edit-banner", { admin: true, layout: "adminlayout", banner, administator });
});

///////EDIT Banner/////////////////////                                         
router.post("/edit-banner/:id", verifySignedIn, function (req, res) {
  let bannerId = req.params.id;
  adminHelper.updatebanner(bannerId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/banner-images/" + bannerId + ".png");
      }
    }
    res.redirect("/admin/banner/all-banners");
  });
});

///////DELETE Banner/////////////////////                                         
router.get("/delete-banner/:id", verifySignedIn, function (req, res) {
  let bannerId = req.params.id;
  adminHelper.deletebanner(bannerId).then((response) => {
    fs.unlinkSync("./public/images/banner-images/" + bannerId + ".png");
    res.redirect("/admin/banner/all-banners");
  });
});

///////DELETE ALL Banner/////////////////////                                         
router.get("/delete-all-banners", verifySignedIn, function (req, res) {
  adminHelper.deleteAllbanners().then(() => {
    res.redirect("/admin/banner/all-banners");
  });
});

///////ALL social/////////////////////                                         
router.get("/all-socials", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllsocials().then((socials) => {
    res.render("admin/social/all-socials", { admin: true, layout: "innerlayout", socials, administator });
  });
});

///////ADD Social/////////////////////                                         
router.get("/add-social", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/social/add-social", { admin: true, layout: "innerlayout", administator });
});

///////ADD Social/////////////////////                                         
router.post("/add-social", function (req, res) {
  adminHelper.addsocial(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/social-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/social/all-socials");
      } else {
        console.log(err);
      }
    });
  });
});

///////EDIT Social/////////////////////                                         
router.get("/edit-social/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let socialId = req.params.id;
  let social = await adminHelper.getsocialDetails(socialId);
  console.log(social);
  res.render("admin/social/edit-social", { admin: true, layout: "innerlayout", social, administator });
});

///////EDIT Social/////////////////////                                         
router.post("/edit-social/:id", verifySignedIn, function (req, res) {
  let socialId = req.params.id;
  adminHelper.updatesocial(socialId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/social-images/" + socialId + ".png");
      }
    }
    res.redirect("/admin/social/all-socials");
  });
});

///////DELETE Social/////////////////////                                         
router.get("/delete-social/:id", verifySignedIn, function (req, res) {
  let socialId = req.params.id;
  adminHelper.deletesocial(socialId).then((response) => {
    fs.unlinkSync("./public/images/social-images/" + socialId + ".png");
    res.redirect("/admin/social/all-socials");
  });
});

///////DELETE ALL Social/////////////////////                                         
router.get("/delete-all-socials", verifySignedIn, function (req, res) {
  adminHelper.deleteAllsocials().then(() => {
    res.redirect("/admin/social/all-socials");
  });
});

///////ALL site/////////////////////                                         
router.get("/all-sites", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllsites().then((sites) => {
    res.render("admin/site/all-sites", { admin: true, layout: "innerlayout", sites, administator });
  });
});

///////ADD Site-Settings/////////////////////                                         
router.get("/add-site", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/site/add-site", { admin: true, layout: "innerlayout", administator });
});

///////ADD Site-Settings/////////////////////                                         
router.post("/add-site", function (req, res) {
  adminHelper.addsite(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/site-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/site/all-sites");
      } else {
        console.log(err);
      }
    });
  });
});

///////EDIT Site-Settings/////////////////////                                         
router.get("/edit-site/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let siteId = req.params.id;
  let site = await adminHelper.getsiteDetails(siteId);
  console.log(site);
  res.render("admin/site/edit-site", { admin: true, layout: "innerlayout", site, administator });
});

///////EDIT Site-Settings/////////////////////                                         
router.post("/edit-site/:id", verifySignedIn, function (req, res) {
  let siteId = req.params.id;
  adminHelper.updatesite(siteId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/site-images/" + siteId + ".png");
      }
    }
    res.redirect("/admin/site/all-sites");
  });
});

///////DELETE Site-Settings/////////////////////                                         
router.get("/delete-site/:id", verifySignedIn, function (req, res) {
  let siteId = req.params.id;
  adminHelper.deletesite(siteId).then((response) => {
    fs.unlinkSync("./public/images/site-images/" + siteId + ".png");
    res.redirect("/admin/site/all-sites");
  });
});

///////DELETE ALL Site-Settings/////////////////////                                         
router.get("/delete-all-sites", verifySignedIn, function (req, res) {
  adminHelper.deleteAllsites().then(() => {
    res.redirect("/admin/site/all-sites");
  });
});






router.get("/all-products", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllProducts().then((products) => {
    res.render("admin/all-products", { admin: true, layout: "adminlayout", products, administator });
  });
});

router.get("/signup", function (req, res) {
  if (req.session.signedInAdmin) {
    res.redirect("/admin");
  } else {
    res.render("admin/signup", {
      admin: true, layout: "adminlayout",
      signUpErr: req.session.signUpErr,
    });
  }
});

router.post("/signup", function (req, res) {
  adminHelper.doSignup(req.body).then((response) => {
    console.log(response);
    if (response.status == false) {
      req.session.signUpErr = "Invalid Admin Code";
      res.redirect("/admin/signup");
    } else {
      req.session.signedInAdmin = true;
      req.session.admin = response;
      res.redirect("/admin");
    }
  });
});

router.get("/signin", function (req, res) {
  if (req.session.signedInAdmin) {
    res.redirect("/admin");
  } else {
    res.render("admin/signin", {
      admin: true, layout: "adminlayout",
      signInErr: req.session.signInErr,
    });
    req.session.signInErr = null;
  }
});

router.post("/signin", function (req, res) {
  adminHelper.doSignin(req.body).then((response) => {
    if (response.status) {
      req.session.signedInAdmin = true;
      req.session.admin = response.admin;
      res.redirect("/admin");
    } else {
      req.session.signInErr = "Invalid Email/Password";
      res.redirect("/admin/signin");
    }
  });
});

router.get("/signout", function (req, res) {
  req.session.signedInAdmin = false;
  req.session.admin = null;
  res.redirect("/admin");
});

router.get("/add-product", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  res.render("admin/add-product", { admin: true, layout: "adminlayout", administator });
});

router.post("/add-product", function (req, res) {
  adminHelper.addProduct(req.body, (id) => {
    let image = req.files.Image;
    image.mv("./public/images/product-images/" + id + ".png", (err, done) => {
      if (!err) {
        res.redirect("/admin/add-product");
      } else {
        console.log(err);
      }
    });
  });
});

router.get("/edit-product/:id", verifySignedIn, async function (req, res) {
  let administator = req.session.admin;
  let productId = req.params.id;
  let product = await adminHelper.getProductDetails(productId);
  console.log(product);
  res.render("admin/edit-product", { admin: true, layout: "adminlayout", product, administator });
});

router.post("/edit-product/:id", verifySignedIn, function (req, res) {
  let productId = req.params.id;
  adminHelper.updateProduct(productId, req.body).then(() => {
    if (req.files) {
      let image = req.files.Image;
      if (image) {
        image.mv("./public/images/product-images/" + productId + ".png");
      }
    }
    res.redirect("/admin/all-products");
  });
});

router.get("/delete-product/:id", verifySignedIn, function (req, res) {
  let productId = req.params.id;
  adminHelper.deleteProduct(productId).then((response) => {
    fs.unlinkSync("./public/images/product-images/" + productId + ".png");
    res.redirect("/admin/all-products");
  });
});

router.get("/delete-all-products", verifySignedIn, function (req, res) {
  adminHelper.deleteAllProducts().then(() => {
    res.redirect("/admin/all-products");
  });
});

router.get("/all-users", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.getAllUsers().then((users) => {
    res.render("admin/all-users", { admin: true, layout: "adminlayout", administator, users });
  });
});

router.get("/remove-user/:id", verifySignedIn, function (req, res) {
  let userId = req.params.id;
  adminHelper.removeUser(userId).then(() => {
    res.redirect("/admin/all-users");
  });
});

router.get("/remove-all-users", verifySignedIn, function (req, res) {
  adminHelper.removeAllUsers().then(() => {
    res.redirect("/admin/all-users");
  });
});


router.post("/search", verifySignedIn, function (req, res) {
  let administator = req.session.admin;
  adminHelper.searchProduct(req.body).then((response) => {
    res.render("admin/search-result", { admin: true, layout: "adminlayout", administator, response });
  });
});


module.exports = router;
