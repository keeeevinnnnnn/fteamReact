import React from 'react';
import Avatar from '@mui/material/Avatar';

function Cus_message() {
  return (
    <>
      <div class="row m-2 border-bottom border-gray">
        <div class="col-2">
          <Avatar sx={{ bgcolor: 'black'[900] }}>OP</Avatar>
        </div>
        <div className="col-10">
          <h6>User Name</h6>
          <p>這是留言這是留言這是留言這是留言這是留言這是留言</p>
        </div>
      </div>
    </>
  );
}

export default Cus_message;
