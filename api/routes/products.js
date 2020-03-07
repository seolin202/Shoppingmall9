// express loading
const express = require('express');
// express안에 있는 모듈 중 .router();를 씀
// 이것을 router라고 상수화
const router = express.Router();
// product와 관련된 api, 즉 product CRUD는 여기서 진행
router.get('/', (req, res) => {
    res.json({
        msg: "products data get"
    });
});
router.post('/', (req, res) => {
    res.json({
        msg: "products posting"
    });
});
router.patch('/', (req, res) => {
    res.json({
        msg: "products updated"
    });
});
router.delete('/', (req, res) => {
    res.json({
        msg: "products deleted"
    });
});
// router를 모듈화한 후 out
module.exports = router;