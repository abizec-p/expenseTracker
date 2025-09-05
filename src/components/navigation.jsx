import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";

function Nav() {
  return (
    <section className="navigation">
      <div className="sidebar">
        <div className="logo">
          <h1>Ex-track</h1>
          <p>An easy expense tracker.</p>
        </div>
        <div className="menu">
          <div>
            <span>
              <MdDashboard />
            </span>{" "}
            <Link>Dashboard</Link>
          </div>
        
          <div>
            {" "}
            <span>
              <GrTransaction />
            </span>{" "}
            <Link>Transaction</Link>
          </div>
          <div>
            {" "}
            <span>
              <TbReportAnalytics />
            </span>{" "}
            <Link>Records</Link>
          </div>
        </div>
        <div className="footer">
          <p>
            <b>Abishek pariyar</b>
          </p>
          <Link>FAQ</Link>
          <Link>Settings</Link>

          <Link>Logout</Link>
        </div>
      </div>
    </section>
  );
}

export default Nav;
