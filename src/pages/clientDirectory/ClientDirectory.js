import React, { useState } from "react";
import styles from "./clientDirectory.module.scss";
const contactList = [
  {
    name: "Madge Barber",
    email: "fookla@hovleinu.ne",
    phone: "993011215",
  },
  {
    name: "Hunter Obrien",
    email: "mahbi@bagjipha.re",
    phone: "589728479",
  },
  {
    name: "Virginia Ray",
    email: "lir@cenuf.mu",
    phone: "507046510",
  },
  {
    name: "Floyd Carpenter",
    email: "fel@omeukdir.hm",
    phone: "366968052",
  },
  {
    name: "Lena Kelley",
    email: "dogiuko@cubavik.mt",
    phone: "527945192",
  },
  {
    name: "Bessie Ramirez",
    email: "ag@rarcikdus.td",
    phone: "24074930",
  },
  {
    name: "Louis Harmon",
    email: "roswikato@jowes.es",
    phone: "238227302",
  },
  {
    name: "Isabella Higgins",
    email: "kildupduw@veeg.mm",
    phone: "735606324",
  },
  {
    name: "Anthony Hubbard",
    email: "bizus@ewujirlap.ss",
    phone: "257805098",
  },
  {
    name: "Brandon Lopez",
    email: "wiliir@jopgubino.km",
    phone: "509959376",
  },
  {
    name: "Manuel Hansen",
    email: "mesvago@surmursu.il",
    phone: "149346840",
  },
  {
    name: "Cornelia Conner",
    email: "cirtesku@birefa.fi",
    phone: "722972511",
  },
  {
    name: "Myrtie Cooper",
    email: "nokued@obapumre.pr",
    phone: "227516448",
  },
  {
    name: "Ora Richards",
    email: "jerul@izfe.uz",
    phone: "35579423",
  },
  {
    name: "Francis Brock",
    email: "daba@uro.sc",
    phone: "152718875",
  },
  {
    name: "Juan Haynes",
    email: "met@vamrof.bn",
    phone: "401662661",
  },
  {
    name: "Benjamin Valdez",
    email: "duzuwuwa@dekefo.tr",
    phone: "798402831",
  },
  {
    name: "Aaron Weber",
    email: "gud@ciwbuk.ky",
    phone: "758792187",
  },
  {
    name: "Verna Jacobs",
    email: "bokzakol@re.ad",
    phone: "807198605",
  },
  {
    name: "Bruce Sherman",
    email: "boco@ri.zw",
    phone: "885948044",
  },
  {
    name: "Gordon Curtis",
    email: "iswa@ciwkeb.tw",
    phone: "381720582",
  },
  {
    name: "Alma Reed",
    email: "modon@mulkod.de",
    phone: "846167462",
  },
  {
    name: "Nathan Saunders",
    email: "feechog@ovbej.dk",
    phone: "394206003",
  },
  {
    name: "Brian Fields",
    email: "rid@hezurtov.bm",
    phone: "990456494",
  },
];
function ClientDirectory() {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState(contactList);

  const filterRecord = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = contactList.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUser(results);
    } else {
      setFoundUser(contactList);
    }

    setName(keyword);
  };

  const renderContactTable = () => {
    if (foundUser && foundUser.length > 0) {
      return foundUser.map((item, index) => {
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            <div className="btn-group">
              <a
                className="btn btn-default btn-sm"
                href={`mailto:${item.email}`}
              >
                <i className="ion ion-email"></i>
              </a>
              <a className="btn btn-default btn-sm" href={`tel:${item.phone}`}>
                <i className="ion ion-iphone"></i>
              </a>
              <a className="btn btn-default btn-sm" href={`tel:${item.phone}`}>
                <i className="ion ion-chatbox"></i>
              </a>
            </div>
          </td>
        </tr>;
      });
    } else {
      return <h1>Not Matches found!</h1>;
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <i className="ion ion-clipboard mr-1"></i>Directory
          </h3>
        </div>
        <div
          className="card-body pt-0"
          style={{ maxHeight: "380px", overflow: "scroll" }}
        >
          <div className="sticky-box py-4 sticky-top bg-white">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Search Contacts"
                onChange={filterRecord}
              />
              <span className="input-group-append">
                <button type="button" className="btn btn-secondary btn-flat">
                  <i className="ion ion-search"></i>
                </button>
              </span>
            </div>
          </div>

          <table className={`table ${styles.tableFixHead}`}>
            <thead>
              <tr>
                <th style={{ width: "10px" }}>#</th>
                <th>Name</th>
                <th style={{ width: "40px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foundUser && foundUser.length > 0 ? (
                foundUser.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className="btn-group">
                        <a
                          className="btn btn-default btn-sm"
                          href={`mailto:${item.email}`}
                        >
                          <i className="ion ion-email"></i>
                        </a>
                        <a
                          className="btn btn-default btn-sm"
                          href={`tel:${item.phone}`}
                        >
                          <i className="ion ion-iphone"></i>
                        </a>
                        <a
                          className="btn btn-default btn-sm"
                          href={`tel:${item.phone}`}
                        >
                          <i className="ion ion-chatbox"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>No results found!</h1>
              )}
            </tbody>
          </table>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default ClientDirectory;
