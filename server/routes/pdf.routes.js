const express = require("express");
const upload = require("../utils/multer.utils");
const { pdfabstractController,pdfpresentationController,pdfdiaryController,pdfreportController,pdfsddController,pdfsrsController,pdfimplementationController,viewabstractController,viewdiaryController,viewimplementationController,viewpptController,viewreportController,viewsddController,viewsrsController } = require("../controller/pdf.controller");
const { evaluationabstractController,evaluationdiaryController,evaluationsddController,evaluationsrsController,evaluationimplementationController,evaluationpptController,evaluationreportController,totalmarkController} = require("../controller/evaluation.controller")

const router = express.Router();

router.post("/abstract/:projectId", upload.single("pdf"), pdfabstractController);
router.post("/presentation/:projectId", upload.single("pdf"), pdfpresentationController);
router.post("/diary/:projectId", upload.single("pdf"), pdfdiaryController);
router.post("/report/:projectId", upload.single("pdf"), pdfreportController);
router.post("/sdd/:projectId", upload.single("pdf"), pdfsddController);
router.post("/srs/:projectId", upload.single("pdf"), pdfsrsController);
router.post("/implementation/:projectId", upload.single("pdf"), pdfimplementationController);


router.get("/viewabstract/:projectId",viewabstractController);
router.get("/viewdiary/:projectId",viewdiaryController);
router.get("/viewsdd/:projectId",viewsddController);
router.get("/viewsrs/:projectId",viewsrsController);
router.get("/viewppt/:projectId",viewpptController);
router.get("/viewimplementation/:projectId",viewimplementationController);
router.get("/viewreport/:projectId",viewreportController);


router.post("/evaluateabstract/:projectId",evaluationabstractController);
router.post("/evaluatediary/:projectId",evaluationdiaryController);
router.post("/evaluatesdd/:projectId",evaluationsddController);
router.post("/evaluatesrs/:projectId",evaluationsrsController);
router.post("/evaluateimplementation/:projectId",evaluationimplementationController);
router.post("/evaluateppt/:projectId",evaluationpptController);
router.post("/evaluatereport/:projectId",evaluationreportController);

router.get("/gettotalmark/:projectId",totalmarkController);


module.exports = router;
