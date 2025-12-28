const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const ProfileData = require("./models/linkedinProfile.models");

initializeDatabase();
const jsonData = fs.readFileSync("linkedInProfileDetails.json", "utf8");
const SeedProfileData = JSON.parse(jsonData);

const seedData = () => {
  for (let i of SeedProfileData) {
    const NewProfiles = new ProfileData({
      fullName: i.fullName,
      username: i.username,
      bio: i.bio,
      profilePicUrl: i.profilePicUrl,
      followingCount: i.followingCount,
      followerCount: i.followerCount,
      companyName: i.companyName,
      location: i.location,
      portfolioUrl: i.portfolioUrl,
    });

    NewProfiles.save();
  }
};

seedData();
