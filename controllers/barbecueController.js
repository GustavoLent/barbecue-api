import BarbecueService from "../services/barbecue/barbecueService.js";
import express from "express";

const barbecueService = new BarbecueService()
const barbecueRouter = express.Router();

barbecueRouter.get("/:city", async (req, res) => {
    const city = req.params.city

    try {
        const recommendation = await barbecueService.getBarbecueRecomendation(city)

        if (recommendation) {
            return res.status(200).send(recommendation);
        }

        res.status(404).send("Error getting recommendation");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

export default barbecueRouter;