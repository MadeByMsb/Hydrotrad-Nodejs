var db = require("../config/connection");
var collections = require("../config/collections");
var bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;

module.exports = {


  ///////ADD Category/////////////////////                                         
  addcategory: (category, callback) => {
    console.log(category);
    category.Price = parseInt(category.Price);
    db.get()
      .collection(collections.CATEGORY_COLLECTION)
      .insertOne(category)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL Category/////////////////////                                            
  getAllcategories: () => {
    return new Promise(async (resolve, reject) => {
      let categories = await db
        .get()
        .collection(collections.CATEGORY_COLLECTION)
        .find()
        .toArray();
      resolve(categories);
    });
  },

  ///////ADD Category DETAILS/////////////////////                                            
  getcategoryDetails: (categoryId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CATEGORY_COLLECTION)
        .findOne({
          _id: objectId(categoryId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE Category/////////////////////                                            
  deletecategory: (categoryId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CATEGORY_COLLECTION)
        .removeOne({
          _id: objectId(categoryId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE Category/////////////////////                                            
  updatecategory: (categoryId, categoryDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CATEGORY_COLLECTION)
        .updateOne(
          {
            _id: objectId(categoryId)
          },
          {
            $set: {
              Name: categoryDetails.Name,
              Category: categoryDetails.Category,
              Price: categoryDetails.Price,
              Description: categoryDetails.Description,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL Category/////////////////////                                            
  deleteAllcategories: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CATEGORY_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },



  ///////ADD contact/////////////////////                                         
  addcontact: (contact, callback) => {
    console.log(contact);
    contact.Price = parseInt(contact.Price);
    db.get()
      .collection(collections.CONTACT_COLLECTION)
      .insertOne(contact)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL contact/////////////////////                                            
  getAllcontacts: () => {
    return new Promise(async (resolve, reject) => {
      let contacts = await db
        .get()
        .collection(collections.CONTACT_COLLECTION)
        .find()
        .toArray();
      resolve(contacts);
    });
  },

  ///////ADD contact DETAILS/////////////////////                                            
  getcontactDetails: (contactId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CONTACT_COLLECTION)
        .findOne({
          _id: objectId(contactId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE contact/////////////////////                                            
  deletecontact: (contactId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CONTACT_COLLECTION)
        .removeOne({
          _id: objectId(contactId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE contact/////////////////////                                            
  updatecontact: (contactId, contactDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CONTACT_COLLECTION)
        .updateOne(
          {
            _id: objectId(contactId)
          },
          {
            $set: {
              Phone: contactDetails.Phone,
              Email: contactDetails.Email,
              Location: contactDetails.Location,
              maplink: contactDetails.maplink,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL contact/////////////////////                                            
  deleteAllcontacts: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.CONTACT_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
    });
  },


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

  ///////ADD Products/////////////////////                                         
  addproduct: (product, callback) => {
    console.log(product);
    product.Price = parseInt(product.Price);
    db.get()
      .collection(collections.PRODUCT_COLLECTION)
      .insertOne(product)
      .then((data) => {
        console.log(data);
        callback(data.ops[0]._id);
      });
  },

  ///////GET ALL Products/////////////////////                                            
  getAllproducts: () => {
    return new Promise(async (resolve, reject) => {
      let products = await db
        .get()
        .collection(collections.PRODUCT_COLLECTION)
        .find()
        .toArray();
      resolve(products);
    });
  },

  ///////ADD Products DETAILS/////////////////////                                            
  getproductDetails: (productId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCT_COLLECTION)
        .findOne({
          _id: objectId(productId)
        })
        .then((response) => {
          resolve(response);
        });
    });
  },

  ///////DELETE Products/////////////////////                                            
  deleteproduct: (productId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCT_COLLECTION)
        .removeOne({
          _id: objectId(productId)
        })
        .then((response) => {
          console.log(response);
          resolve(response);
        });
    });
  },

  ///////UPDATE Products/////////////////////                                            
  updateproduct: (productId, productDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCT_COLLECTION)
        .updateOne(
          {
            _id: objectId(productId)
          },
          {
            $set: {
              name: productDetails.name,
              category: productDetails.category,
              desc: productDetails.desc,
              // size: productDetails.size,
              // model: productDetails.model,
              // material: productDetails.material,

            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },


  ///////DELETE ALL Products/////////////////////                                            
  deleteAllproducts: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.PRODUCT_COLLECTION)
        .remove({})
        .then(() => {
          resolve();
        });
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
