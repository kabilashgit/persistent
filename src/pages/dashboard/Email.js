import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Email() {
  const mailData = [
    {
      name: "Stella Hopkins",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "4/10/2083",
      stars: true,
    },
    {
      name: "Christine Shelton",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "4/30/2107",
      stars: false,
    },
    {
      name: "Tony Cox",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "12/12/2065",
      stars: true,
    },
    {
      name: "Lee Weber",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "3/14/2095",
      stars: true,
    },
    {
      name: "Martha Craig",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "8/1/2048",
      stars: false,
    },
    {
      name: "Jeffrey Black",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "1/29/2089",
      stars: false,
    },
    {
      name: "Delia Jimenez",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "1/28/2029",
      stars: true,
    },
    {
      name: "Christopher Jenkins",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "12/11/2113",
      stars: false,
    },
    {
      name: "Mamie Holt",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "4/20/2098",
      stars: true,
    },
    {
      name: "Sam Bradley",
      subject: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illo odit delectus magnam accusantium facere adipisci eveniet incidunt, ut repudiandae, quas repellendus doloribus dicta nesciunt fugiat in aliquid. Minus temporibus cumque, aliquam omnis nihil laborum laboriosam eligendi ratione vel vitae quisquam fugit cupiditate quas eveniet facilis? Maxime neque dolores odit",
      date: "8/4/2110",
      stars: false,
    },
  ];
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.floor(mailData.length / perPage));
  });

  const handlePageClick = (e) => {
    let page = e.target.id;
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(mailData.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const renderPagination = pageNumbers.map((number) => {
    return (
      <li type="button" className="page-item" key={number}>
        <a id={number} className="page-link" onClick={handlePageClick}>
          {number}
        </a>
      </li>
    );
  });

  const mailGen = mailData
    .slice(currentPage * perPage - perPage, currentPage * perPage)
    .map((mail, index) => {
      let { name, subject, body, date, stars } = mail;
      return (
        <tr key={uuidv4()}>
          <td>
            <div className="icheck-primary">
              <input type="checkbox" value="" id={`check${index}`} />
              <label htmlFor={`check${index}`}></label>
            </div>
          </td>
          <td className="mailbox-star">
            <a href="#">
              <i
                className={`fas ${
                  stars ? "fa-star" : "fa-star-0"
                } text-warning`}
              ></i>
            </a>
          </td>
          <td className="mailbox-name">
            <a href="read-mail.html">{name}</a>
          </td>
          <td className="mailbox-subject">
            <b>{mail.subject}</b> -{" "}
            {body.length > 25 ? (body = body.substring(0, 24) + "...") : body}
          </td>
          <td className="mailbox-attachment"></td>
          <td className="mailbox-date">{date}</td>
        </tr>
      );
    });

  return (
    <div className="">
      <div className="card card-primary card-outline connectedSortable">
        <div className="card-header">
          <h3 className="card-title">Inbox</h3>
          <div className="card-tools">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Search Mail"
              />
              <div className="input-group-append">
                <div className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="d-flex justify-content-between">
            <div className="mailbox-controls text-left">
              <button
                type="button"
                className="btn btn-default btn-sm checkbox-toggle"
              >
                <i className="far fa-square"></i>
              </button>
              <div className="btn-group">
                <button type="button" className="btn btn-default btn-sm">
                  <i className="far fa-trash-alt"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-reply"></i>
                </button>
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-share"></i>
                </button>
              </div>

              <button type="button" className="btn btn-default btn-sm">
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>
            <div className="card-tools">
              <div className="d-flex">
                <span className="px-1">
                  {currentPage} / {totalPages}
                </span>
                <ul className="pagination pagination-sm text-right">
                  {renderPagination}
                </ul>
              </div>
            </div>
          </div>

          <div className="table-responsive mailbox-messages">
            <table className="table table-hover table-striped">
              <tbody>{mailGen}</tbody>
            </table>
          </div>
        </div>

        <div className="card-footer p-0">
          <div className="card-tools d-flex justify-content-end">
            <span className="px-1">
              {currentPage} / {totalPages}
            </span>
            <ul className="pagination pagination-sm text-right">
              {renderPagination}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
