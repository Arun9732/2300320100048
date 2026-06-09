const { maximizeImpact } = require("../services/knapsack.service");
const { fetchDepotData } = require("../services/depot.service");
const { fetchVehicles } = require("../services/vehicle.service");
const Log = require("../middleware/logger");

async function getBestSchedule(req, res) {
    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Schedule request received"
        );

        const depots = await fetchDepotData();
        const vehicles = await fetchVehicles();

        const mechanicHours = depots.depots[0].MechanicHours;

        const result = maximizeImpact(
            vehicles.vehicles,
            mechanicHours
        );

        await Log(
            "backend",
            "info",
            "service",
            `Maximum impact calculated: ${result}`
        );

        res.status(200).json({
            success: true,
            mechanicHours,
            maximumImpact: result
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    getBestSchedule
};