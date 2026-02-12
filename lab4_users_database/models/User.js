const mongoose = require("mongoose");

// Validation rules from Lab04:
// - All fields are mandatory
// - Username length: min 4, max 100
// - Email: unique + valid format
// - City: alphabets + space only
// - Website: valid URL with http or https
// - Zipcode: DDDDD-DDDD
// - Phone: D-DDD-DDD-DDDD

const CityRegex = /^[A-Za-z ]+$/;
const WebsiteRegex = /^https?:\/\/[^\s]+$/i;
const ZipRegex = /^\d{5}-\d{4}$/;
const PhoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GeoSchema = new mongoose.Schema(
  {
    lat: { type: String, required: [true, "lat is required"] },
    lng: { type: String, required: [true, "lng is required"] },
  },
  { _id: false }
);

const AddressSchema = new mongoose.Schema(
  {
    street: { type: String, required: [true, "street is required"] },
    suite: { type: String, required: [true, "suite is required"] },
    city: {
      type: String,
      required: [true, "city is required"],
      match: [CityRegex, "city can contain only alphabets and spaces"],
    },
    zipcode: {
      type: String,
      required: [true, "zipcode is required"],
      match: [ZipRegex, "zipcode must be like 12345-1234"],
    },
    geo: { type: GeoSchema, required: [true, "geo is required"] },
  },
  { _id: false }
);

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "company name is required"] },
    catchPhrase: { type: String, required: [true, "catchPhrase is required"] },
    bs: { type: String, required: [true, "bs is required"] },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },

    username: {
      type: String,
      required: [true, "username is required"],
      minlength: [4, "username must have minimum length 4"],
      maxlength: [100, "username must have maximum length 100"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [EmailRegex, "email must be a valid email address"],
    },

    address: { type: AddressSchema, required: [true, "address is required"] },

    phone: {
      type: String,
      required: [true, "phone is required"],
      match: [PhoneRegex, "phone must be like 1-123-123-1234"],
    },

    website: {
      type: String,
      required: [true, "website is required"],
      match: [WebsiteRegex, "website must be a valid URL starting with http or https"],
    },

    company: { type: CompanySchema, required: [true, "company is required"] },
  },
  { timestamps: true, collection: "users" }
);

// Ensure unique index on email (Atlas will enforce once index is built)
UserSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", UserSchema);
