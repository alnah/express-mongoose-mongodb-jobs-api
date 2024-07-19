const getAllJobs = async (req, res, next) => {
  res.json({ postman: "get all jobs" });
};

const createJob = async (req, res, next) => {
  res.json({ postman: "create" });
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
