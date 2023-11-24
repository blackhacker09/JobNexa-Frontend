const JobList = ({ jobs, setSelectedJob }) => {
    return (
        <div>
            <h2 className="mt-3 mb-4">Job Listing </h2>
            <ul className="list-group">
                {jobs.map((job) => (
                    <li className="list-group-item" key={job._id}>
                        <button
                            onClick={() => {
                                setSelectedJob(job);
                            }}
                            className="btn btn-link text-decoration-none"
                        >
                            {job.title} - {job.company}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
