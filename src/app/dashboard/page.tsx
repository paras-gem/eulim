const activityRows = [
  { event: "Student showcase", date: "May 13", status: "Confirmed" },
  { event: "Design sprint", date: "May 20", status: "Open" },
  { event: "Coding meetup", date: "May 27", status: "Confirmed" },
  { event: "Roadmap review", date: "June 1", status: "Planned" },
];

export default function DashboardPage() {
  return (
    <section className="dashboardLayout">
      <div className="dashboardIntro">
        <div>
          <p className="sectionLabel">Member portal</p>
          <h2>Dashboard overview</h2>
          <p className="dashboardHelp">
            Track event attendance, access your member projects, and review upcoming club activity in one central place.
          </p>
        </div>
        <div className="formActions">
          <button className="buttonGhost">View announcements</button>
          <button className="buttonPrimary">Create event</button>
        </div>
      </div>

      <div className="statsGrid">
        <article className="statCard">
          <h3>Total events</h3>
          <p>28</p>
        </article>
        <article className="statCard">
          <h3>Active members</h3>
          <p>324</p>
        </article>
        <article className="statCard">
          <h3>Sessions this month</h3>
          <p>9</p>
        </article>
      </div>

      <div className="dashboardGrid">
        <div className="panelList">
          <section className="panelCard">
            <h3>Recent activity</h3>
            <p className="sectionText">Your most recent event invitations, workshop updates, and collaboration requests.</p>
            <ul className="activityList">
              <li>
                <strong>Project kickoff</strong>
                <span>Completed</span>
              </li>
              <li>
                <strong>Mentor office hours</strong>
                <span>Tomorrow</span>
              </li>
              <li>
                <strong>Design critique</strong>
                <span>May 19</span>
              </li>
            </ul>
          </section>

          <section className="panelCard">
            <h3>Member priorities</h3>
            <p className="sectionText">A quick look at what matters next for your campus club organizing.
            </p>
            <div className="statusBadge">Planning phase</div>
          </section>
        </div>

        <section className="panelCard">
          <div className="sectionHeader">
            <div>
              <p className="sectionLabel">Upcoming events</p>
              <h2 className="panelHeading">Live schedule</h2>
            </div>
          </div>
          <table className="eventTable">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activityRows.map((item) => (
                <tr key={item.event}>
                  <td>{item.event}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className="statusBadge">{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
}
