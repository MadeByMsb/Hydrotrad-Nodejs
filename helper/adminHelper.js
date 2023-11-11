var db = require("../config/connection");
var collections = require("../config/collections");
var bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;

module.exports = {


  ///////ADD sectionone/////////////////////                                         
  addsone: (sone, callback) => {
    console.log(sone);
    sone.Price = parseInt(sone.Price);
    db.get()
      .collection(collections.SONE_COLLECTION)
      .insertOne(sone)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL sectionone/////////////////////                                            
  getAllsones: () => {
    return new Promise(async (resolve, reject) => {
      let sones = await db
        .get()
        .collection(collections.SONE_COLLECTION)
        .find()
        .toArray();
      resolve(sones);
    });
  },

  ///////ADD sectionone DETAILS/////////////////////                                            
  getsoneDetails: (soneId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SONE_COLLECTION)
        .findOne({
          _id: objectId(soneId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE sectionone/////////////////////                                            
  deletesone: (soneId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SONE_COLLECTION)
        .removeOne({
          _id: objectId(soneId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE sectionone/////////////////////                                            
  updatesone: (soneId, soneDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SONE_COLLECTION)
        .updateOne(
          {
            _id: objectId(soneId)
          },
          {
            $set: {
              Mheading: soneDetails.Mheading,
              desc: soneDetails.desc,
              btnlink: soneDetails.btnlink,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL sectionone/////////////////////                                            
  deleteAllsones: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SONE_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },


  ///////ADD About/////////////////////                                         
  addabout: (about, callback) => {
    console.log(about);
    about.Price = parseInt(about.Price);
    db.get()
      .collection(collections.ABOUT_COLLECTION)
      .insertOne(about)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL About/////////////////////                                            
  getAllabouts: () => {
    return new Promise(async (resolve, reject) => {
      let abouts = await db
        .get()
        .collection(collections.ABOUT_COLLECTION)
        .find()
        .toArray();
      resolve(abouts);
    });
  },

  ///////ADD About DETAILS/////////////////////                                            
  getaboutDetails: (aboutId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.ABOUT_COLLECTION)
        .findOne({
          _id: objectId(aboutId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE About/////////////////////                                            
  deleteabout: (aboutId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.ABOUT_COLLECTION)
        .removeOne({
          _id: objectId(aboutId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE About/////////////////////                                            
  updateabout: (aboutId, aboutDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.ABOUT_COLLECTION)
        .updateOne(
          {
            _id: objectId(aboutId)
          },
          {
            $set: {
              subtitle: aboutDetails.subtitle,
              Mheading: aboutDetails.Mheading,
              desc: aboutDetails.desc,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL About/////////////////////                                            
  deleteAllabouts: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.ABOUT_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },

  ///////ADD Banner/////////////////////                                         
  addbanner: (banner, callback) => {
    console.log(banner);
    banner.Price = parseInt(banner.Price);
    db.get()
      .collection(collections.BANNER_COLLECTION)
      .insertOne(banner)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL Banner/////////////////////                                            
  getAllbanners: () => {
    return new Promise(async (resolve, reject) => {
      let banners = await db
        .get()
        .collection(collections.BANNER_COLLECTION)
        .find()
        .toArray();
      resolve(banners);
    });
  },

  ///////ADD Banner DETAILS/////////////////////                                            
  getbannerDetails: (bannerId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.BANNER_COLLECTION)
        .findOne({
          _id: objectId(bannerId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE Banner/////////////////////                                            
  deletebanner: (bannerId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.BANNER_COLLECTION)
        .removeOne({
          _id: objectId(bannerId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE Banner/////////////////////                                            
  updatebanner: (bannerId, bannerDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.BANNER_COLLECTION)
        .updateOne(
          {
            _id: objectId(bannerId)
          },
          {
            $set: {
              subtitle: bannerDetails.subtitle,
              Mheading: bannerDetails.Mheading,
              desc: bannerDetails.desc,
              btnlink: bannerDetails.btnlink,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL Banner/////////////////////                                            
  deleteAllbanners: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.BANNER_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },


  ///////ADD Site/////////////////////                                         
  addsite: (site, callback) => {
    console.log(site);
    db.get()
      .collection(collections.SITE_COLLECTION)
      .insertOne(site)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL Site/////////////////////                                            
  getAllsites: () => {
    return new Promise(async (resolve, reject) => {
      let sites = await db
        .get()
        .collection(collections.SITE_COLLECTION)
        .find()
        .toArray();
      resolve(sites);
    });
  },

  ///////ADD Site DETAILS/////////////////////                                            
  getsiteDetails: (siteId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SITE_COLLECTION)
        .findOne({
          _id: objectId(siteId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE Site/////////////////////                                            
  deletesite: (siteId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SITE_COLLECTION)
        .removeOne({
          _id: objectId(siteId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE Site/////////////////////                                            
  updatesite: (siteId, siteDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SITE_COLLECTION)
        .updateOne(
          {
            _id: objectId(siteId)
          },
          {
            $set: {
              Sname: siteDetails.Sname,
              Saddress: siteDetails.Saddress,
              Sphone: siteDetails.Sphone,
              Semail: siteDetails.Semail,
              Slocation: siteDetails.Slocation,
              primarycolor: siteDetails.primarycolor,
              secondarycolor: siteDetails.secondarycolor,
              btncolor: siteDetails.btncolor,

            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL Site/////////////////////                                            
  deleteAllsites: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SITE_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },



  ///////ADD Social/////////////////////                                         
  addsocial: (social, callback) => {
    console.log(social);
    db.get()
      .collection(collections.SOCIAL_COLLECTION)
      .insertOne(social)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL Social/////////////////////                                            
  getAllsocials: () => {
    return new Promise(async (resolve, reject) => {
      let socials = await db
        .get()
        .collection(collections.SOCIAL_COLLECTION)
        .find()
        .toArray();
      resolve(socials);
    });
  },

  ///////ADD Social DETAILS/////////////////////                                            
  getsocialDetails: (socialId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SOCIAL_COLLECTION)
        .findOne({
          _id: objectId(socialId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE Social/////////////////////                                            
  deletesocial: (socialId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SOCIAL_COLLECTION)
        .removeOne({
          _id: objectId(socialId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE Social/////////////////////                                            
  updatesocial: (socialId, socialDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SOCIAL_COLLECTION)
        .updateOne(
          {
            _id: objectId(socialId)
          },
          {
            $set: {
              name: socialDetails.name,
              url: socialDetails.url,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL Social/////////////////////                                            
  deleteAllsocials: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.SOCIAL_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },
















  addProduct: (product, callback) => {
    console.log(product);
    product.Price = parseInt(product.Price);
    db.get()
      .collection(collections.PRODUCTS_COLLECTION)
      .insertOne(product)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  getAllProducts: () => {
    return new Promise(async (resolve, reject) => {
      let products = await db
        .get()
        .collection(collections.PRODUCTS_COLLECTION)
        .find()
        .toArray();
      resolve(products);
    });
  },

  doSignup: (adminData) => {
    return new Promise(async (resolve, reject) => {
      if (adminData.Code == "admin123") {
        adminData.Password = await bcrypt.hash(adminData.Password, 10);
        db.get()
          .collection(collections.ADMIN_COLLECTION)
          .insertOne(adminData)
          .then((data) => {
            resolve(data.ops[0]);
          });
      } else {
        resolve({ status: false });
      }
    });
  },

  doSignin: (adminData) => {
    return new Promise(async (resolve, reject) => {
      let response = {};
      let admin = await db
        .get()
        .collection(collections.ADMIN_COLLECTION)
        .findOne({ Email: adminData.Email });
      if (admin) {
        bcrypt.compare(adminData.Password, admin.Password).then((status) => {
          if (status) {
            console.log("Login Success");
            response.admin = admin;
            response.status = true;
            resolve(response);
          } else {
            console.log("Login Failed");
            resolve({ status: false });
          }
        });
      } else {
        console.log("Login Failed");
        resolve({ status: false });
      }
    });
  },

  getProductDetails: (productId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCTS_COLLECTION)
        .findOne({ _id: objectId(productId) })
        .then((response) => {
          resolve(response);
        });
    });
  },

  deleteProduct: (productId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCTS_COLLECTION)
        .removeOne({ _id: objectId(productId) })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  updateProduct: (productId, productDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCTS_COLLECTION)
        .updateOne(
          { _id: objectId(productId) },
          {
            $set: {
              Name: productDetails.Name,
              Category: productDetails.Category,
              Price: productDetails.Price,
              Description: productDetails.Description,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },

  deleteAllProducts: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCTS_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },

  getAllUsers: () => {
    return new Promise(async (resolve, reject) => {
      let users = await db
        .get()
        .collection(collections.USERS_COLLECTION)
        .find()
        .toArray();
      resolve(users);
    });
  },

  removeUser: (userId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.USERS_COLLECTION)
        .removeOne({ _id: objectId(userId) })
        .then(() => {
          resolve();
        });
    });
  },

  removeAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.USERS_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },


  searchProduct: (details) => {
    console.log(details);
    return new Promise(async (resolve, reject) => {
      db.get()
        .collection(collections.PRODUCTS_COLLECTION)
        .createIndex({ Name: "text" }).then(async () => {
          let result = await db
            .get()
            .collection(collections.PRODUCTS_COLLECTION)
            .find({
              $text: {
                $search: details.search,
              },
            })
            .toArray();
          resolve(result);
        })

    });
  },
};
