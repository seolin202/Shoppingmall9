// express loading
const express = require('express');
// express안에 있는 모듈 중 .router();를 씀
// 이것을 router라고 상수화
const router = express.Router();
// order와 관련된 api, 즉 order CRUD는 여기서 진행
router.get('/', (req, res) => {
    res.json({
        msg: "orders data get"
    });
});
// router를 모듈화한 후 out
module.exports = router;