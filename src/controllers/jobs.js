const { StatusCodes } = require("http-status-codes");

const Job = require("../models/job");

const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user._id }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs });
};

const createJob = async (req, res, next) => {
  req.body.createdBy = req.user._id;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getJob = async (req, res, next) => {
  res.json({ postman: "get job" });
};

const updateJob = async (req, res, next) => {
  res.json({ postman: "update job" });
};

const deleteJob = async (req, res, next) => {
  res.json({ postman: "delete job" });
};

module.exports = { getAllJobs, createJob, getJob, updateJob, deleteJob };
