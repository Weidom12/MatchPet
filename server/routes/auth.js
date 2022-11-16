const {
  login,
  register,
  findpet,
  home,
  getAllUsers,
  setAvatar,
  logOut,
  perfil
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.post("/findpet", findpet);
router.post("/home", home);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.get("/perfil",perfil)

module.exports = router;
