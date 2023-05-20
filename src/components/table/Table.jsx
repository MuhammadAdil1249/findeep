import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
      {
        id: 1,
        username: "NETSOL",
        Buyers: "3",
        date:"12-03-23",
        Quantity: "100",
        method: "Online",
        img: "data:image/png;base64,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",
        status: "active",
        email: "info@netsoltech.com",
      },
      {
        id: 2,
        username: "SYSTEMSLTD",
        Buyers: "3",
        date:"12-03-23",
        Quantity: "100",
        method: "Online",
        img: "data:image/png;base64,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",
        email: "info@ogdcl.com",
        status: "pending",
      
      },
      {
        id: 3,
        username: "OGDCL",
        Buyers: "3",
        date:"12-03-23",
        Quantity: "100",
        method: "Online",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAh1BMVEVOVWf///9ETGBJUGNBSV1LUmQ+RlvFx8rm5ujFxMr09fasrrSoq7E+SVxGTmGOkJtZYHHT1NeTmJ9rcH44QVdzeISGipSBhZCgpKtTWmtkaXd4fYhbV2Hs7e746ODc3d/vZB65u79QTFboWwDhZyYxOlKJWlBFVGnUWxbWZS3BYjkrR14lM0pznJ/VAAAElklEQVRYhe1Xa5fjJgzFvOyQBL+w8aPejNu60237/39fJQFOpt3N9sOc2e05vh/mxAjpgtAVDGMHDhw4cODAgQM/INR3YRW6+i608225fjytqrKs+P/zKgF4alXqS7xkSR9CpqE08GCkL/G2JKVs+7LvmINha+09KucQwuoJrHPlMBwfgffnnwAYyVW+7FsdPPRcTEryriw7GtEjGiUPoTSby9K3Wj5EP5uMULfukplCJ8NkjOHXZgnWYpbMFTD10y8vLy+/QuDuRgbTYDB7zrLJDSaOKJYH44BGPtUhiDnbuGfFYlyEV/CnjRZ+ybLTVt+tF+lwLvH+9qrX3VDDUuUpy6p9cjma9HPVTJb3IEs8BY2LXvvOUxgNnmceLQXsAHaR5WXnaSOTO4H90++fP/8RaPNybupAjLzo7DucaorMXOauIS8xYbqGuStxbk75VC38rLRQQirYzDCDj7uXkAPHfoOK4K5GF81g8M/X11frwa9zVlnXwa/GIm+2jFIoWYUccKG4Bf+zgyXeNi6E3Xpkw3wK8F82IrKQjRoz2VEqJGx1AJoslAIu2si9niUkwweLhBBmI96KPHGJWThHDJLjWQ2h+DbIrsdJAjaYjSHA2PezhoknyoSGFQjk9Y5C2L73u44EbPLmYgE6CNZp4M3DCD+nbDLbRN56EyG9fT9RuJGKjl0lLBAVBt9GxAOoNW4rW6ur5mTdeTH0sOmAbcBknjDbO++F7znMHZBnt5lrKVDeoWx5Q2V2y5vJ8ZgkzAQ6e4H7wqLIm9aBNnZerL9bnXDD/QBv+W9e3K/mJDhTn71ye3uSPglpuSjBRB90AQe9gK+dimg162h3XnfL3qL46wkvu+6aq31qD3Cz+TUGN5NgHJahmYA0n/HYlevWROL5I695xO0pLzSvpo7by+8tS0gpujOOG0slCLJYY8GjVdt2oJVNIuUZulEvxR1KPuVlymo+ltTDViLmWlN4Jd1AQsTKujm5UL1arUMdcufJ5aGuYmhGs+wzXq3jlaEZSszRnLxOjRHrfeVUWdVMUUSZ131qbBdcz4OO6nRStqzr0n2d19X5GilImMiH+RxixjF5Z0uVNayZUcGtjjKl33rvG9CI2nh1uSLq9yu8G7aIRGzC+Yk+9klolMwECVnI8ULHgjnPegdWxbcCWzcMLE4CBqxC9LNwiWXF9iTP1DccRw6SMm0kdAbftjP28wVzJ6nqW8wvdb+8R2tBrdWhFtb1NJGS0I+afSee8FIHX4aubXuMfKFZqtpvrKCjuMsi9rxHoXoeri+8zZR4sMAN/KyuZPMQJOlIsCRqs8bXDFbWEKtVXtK68onjMumO9dBC9BAVWbdw4hKKoxQ77/mNjmSXFlk0qaszduVtMwzlJJOiMYepEBiXUzkMTWdl1Bvn9P5BCaJfPwaD4Dy5iDiBpbcSvnM8BPGjvj+jcNhybvdHl5oeRILfEMd+8dmHfl9/D76FsBDk6f8a+JTw/zXce0Fa7EnGfXvm++I0YCGV9tsz3xWKqvfxdD+IF7WRf3iWoWd08/jhu0X887+YAwcOHDhw4MD74m+PMkahJSyqdAAAAABJRU5ErkJggg==",
        email: "sales@systemsltd.com",
        status: "pending",
        age: 45,
      },
      {
        id: 4,
        username: "SAZGAR",
        Buyers: "3",
        date:"12-03-23",
        Quantity: "100",
        method: "Online",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABECAMAAACMCVq7AAAAeFBMVEX///8AAAD8/Pz5+fmrq6v19fXy8vK9vb2enp7u7u5ra2vU1NSnp6ehoaHq6uqkpKR4eHjDw8O1tbXj4+Pa2trOzs6Tk5OHh4cxMDBmZWVfX1+NjY1xcXF/f39UU1NBQUFLS0s5NzgWFhYfHx8IAAUuKSkTDxAlJiPsA6NVAAAD4klEQVRYhe1YWZujKhAVRUHFBQSMG2rs9Pz/fzgmaFyYmduda+ZhPs9Dq2V1napiO8ayTpw4ceLEG2Av+FuMzgjbizN+RxZ72vBmUtdzbc6a7gJmXNuG8If9bayO78c0H8BHW0iIRMhDgVhmc9yBhsa+77yF1Y6zOFHDLaf+KhXHTT8edV/k+P4NNcc8I22bim0ujt8OHyWNM1QCgDMeH8xqcy7qrsm2Vtey1OWK9AMvQSs4P7RkR4SsLMTO6vuW7G+LlfYD4eLIURaC1Y2/t4Zx1rf5OhHVR0IcV7GgLM2NcD7Nqrb3Nragg3TflpcRI1qZ1VohDVXX7HJRBUVHTS7KkoqaZoiY6vZ2VEqEjqF1IcPSNcxxwqpS7Wtz64ZB0/kVZARiaJopZmlZGGbZQJKZ3i+AR0nETHOESV1IwwzzKOLH8OIImrxuI6ugMIedSIyP4fUrDKGxG4S5TAtlznKMcWVaX4KUCTRKgHlVlqnhm0WRNJv/Gmgu2b7RdlWlqjPbz5jMf7HmXkPeYLYLFlay6zpv7ykQafK98WVkdUN2xATX271ZZ0NRWh+zinS8oE4YW20HIsG3/rabP86oP+ogPI52JC4LyeAzZMZYO3xGW5845LAoD6W1LC9VdQIZv68nmwvWfoJ6/d72eSYalRoj/r+BOpUSRMMsizP5CTa0o6yNeaW6g06ELWyi+rHbiKSjelV6mtm243q+72WovijyLinr0PrWd00S+t4opTUcywtJ3Q4BfY+MfVLn6vLZBzkmjDGC8+ICfqgcvZV0gs+ZbArVtq0qGsn4QdvxiRNvgo2DaqUU/eUejXoCR8lzY3JJnZL1IvKW44hGo+t3tjAPVDQCy/LI8RKLQAgrMAcnoyeqwEpuVtXzNgggTMrh60u7uuuXlTu4bt93cx5w8HSei/AYwHO3DB7p1F/XAelWIcFSbbqV3KYbf+7JcjKzrnjmoHnDXdJ/gAAb4XQRqFs9+mAWeTgw/rWndM5q4qX9l3ktcQPyeZIKMHZ6pSe7ZzeC5P7X8TxvLpiPvtf56Ne8/S++NX4PXjznjkqmEddgn8/b+qE4EABgHsNiHHk5d+HOi6+m1v0zcKevMXDvvZ2nmbcqnZTTTZLOvmOXnHnU77ystL6JcNDX/BGznMVUufrideee4IlXPr7TArnwWu031HR6TzjXQsbRsUOgX7Fh7Yh08Y6amPQjByvepVP/DQlyOK932E4hH3l7oGvSNK3nIigoo6ieh5dd9PWil0NBHsHMSf9buAzPkatpdtLH3OWIojuWMaYkQfNOIaefNoTeV4QeBfa3fjo9ceLEiX8JPwE9NTihVtsP9AAAAABJRU5ErkJggg==",
        email: "info@sazgar.com",
        status: "active",
        age: 16,
      },
      {
        id: 5,
        username: "BESTWAY CEMENT",    
        Buyers: "2",
        date:"12-03-23",
        Quantity: "99",
        method: "Online",

        img: "data:image/png;base64,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",
        email: "bestway@gmail.com",
        status: "passive",
      },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Stock</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Volume</TableCell>
            <TableCell className="tableCell">Stats</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Buyers}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.Quantity}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
