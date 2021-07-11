import React, { useState, useEffect } from 'react'

const ListUsersEffect = () => {
  const [users, setsUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then(results => results.json())
      .then(e => {
        setsUsers(e.data);
        setTotalPages(e.total_pages);
      });
  }, [currentPage]);

  function handleChangePage(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="list-user">
      <div className="heading">
        <h2 className="text-uppercase">List
            <span className="color-green"> Users</span>
        </h2>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th className="txt-center">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? users.map((user) =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td className="txt-center"><img className="avatar" src={user.avatar} alt="Avatar" /></td>
            </tr>
          ) : <tr><td className="txt-center" colSpan="5">No user found</td></tr>
          }
        </tbody>
      </table>
      <ul className="pagination-bar">
        <li className={`page-item ${currentPage === 1 ? 'disable' : ''}`} onClick={() => handleChangePage(1)}>
          <i className="fa fa-angle-left"></i>
        </li>
        {[...Array(totalPages)].map((x, i) =>
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'selected' : ''}`} onClick={() => handleChangePage(i+1)}>{i+1}</li>
        )}
        <li className={`page-item ${currentPage === totalPages ? 'disable' : ''}`} onClick={() => handleChangePage(totalPages)}>
          <i className="fa fa-angle-right"></i>
        </li>
      </ul>
    </div>
  )
}

export default ListUsersEffect;
