import { Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import { DELETE, GET } from "../ApiFunction/ApiFunction";
import CustomDrawer from "../Common/CustomDrawer";
import CustomInput from "../Common/CustomInput";
import axios from "axios";
import Course from "../Home/Course";
import { useNavigate } from "react-router-dom";

const InstructorTable = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(false);
  const [coursedata , setCoursedata] = useState([])
  const [editdata,setEditdata] = useState({
    courseName:"",
    duration:"",
    rating:"",
    price:"",
    image:null,
    video:null,
  })
  const navigate = useNavigate()
  const showLargeDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const handleSubmit = () => {
      setOpen(false);
    }
  // const dataSource = [
  //   { key: "1", course: "Mike", student: 32, revenue: "10 Downing Street" },
  //   { key: "2", course: "John", student: 42, revenue: "10 Downing Street" },
  //   { key: "3", course: "Alice", student: 28, revenue: "20 Downing Street" },
  //   { key: "4", course: "Bob", student: 35, revenue: "30 Downing Street" },
  //   { key: "5", course: "Charlie", student: 30, revenue: "40 Downing Street" },
  //   { key: "6", course: "Mike", student: 32, revenue: "10 Downing Street" },
  //   { key: "7", course: "John", student: 42, revenue: "10 Downing Street" },
  //   { key: "8", course: "Alice", student: 28, revenue: "20 Downing Street" },
  //   { key: "9", course: "Bob", student: 35, revenue: "30 Downing Street" },
  //   { key: "10", course: "Charlie", student: 30, revenue: "40 Downing Street" },
  //   { key: "1", course: "Mike", student: 32, revenue: "10 Downing Street" },
  //   { key: "2", course: "John", student: 42, revenue: "10 Downing Street" },
  //   { key: "3", course: "Alice", student: 28, revenue: "20 Downing Street" },
  //   { key: "4", course: "Bob", student: 35, revenue: "30 Downing Street" },
  //   { key: "5", course: "Charlie", student: 30, revenue: "40 Downing Street" },
  //   { key: "6", course: "Mike", student: 32, revenue: "10 Downing Street" },
  //   { key: "7", course: "John", student: 42, revenue: "10 Downing Street" },
  //   { key: "8", course: "Alice", student: 28, revenue: "20 Downing Street" },
  //   { key: "9", course: "Bob", student: 35, revenue: "30 Downing Street" },
  //   { key: "10", course: "Charlie", student: 30, revenue: "" },
  // ];
  useEffect(()=>{
    getData()
  },[])
  const getData = async()=>{
    const token = sessionStorage.getItem("token")
    const result = await axios.get("http://localhost:3000/getinstcourse" , {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    console.log();
    
    if(result.data){
      setCoursedata(result.data)
    }
    else{
      setCoursedata([])
    }
    

  }
  const updatedDataSource = coursedata.map(item => ({
    ...item,
    width: 120 ,
  }));
  console.log(updatedDataSource);
  const columns = [
    { title: "Course Name", dataIndex: "courseName", key: "courseName" ,render:(text) => <span className="!text-gray-500 ">{text ? text : "- - -"}</span>},
    { title: "Duration", dataIndex: "duration", key: "duration",width:50,align:"center" ,render:(text) => <small className={text ? "bg-Primary/10 p-1 py-[3px] font-bold border-2 border-Primary/50 rounded-full text-Primary text-[10px]" : "text-gray-700"}>{text ? text : "- - -"}</small>},
    { title: "Rating", dataIndex: "rating", key: "rating",align:"center",render:(text) => <small className={text ? "text-green-600" : "text-gray-700"}>{text ? text : "- - -"}</small> },
    { title: "price", dataIndex: "price", key: "price",align:"center",render:(text) => <small className={text ? "text-green-600" : "text-gray-700"}>{text ? text : "- - -"}</small> },
    {
      title: "Action",
      key: "action",
      align:"center",
      width:100,
      render: (_, record) => (
        <div className="flex gap-2 justify-evenly">
          <CustomButton
            type="edit"
            onClick={() => handleEdit(record)}
          />
          <CustomButton
            type="delete"
            onClick={() => handleDelete(record.key)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    const url = `/`
    DELETE(`${url}/${id}`)
    GET(url)
  }
  const handleEdit = (data) => {
    const id = data._id
    setEditdata(coursedata.filter(a=>(a._id===id)))  
    setOpen(true)
    setUpdateId(true)
  }

  return (
    <>
    <Table
      bordered
      size="small"
      className=""
      columns={columns}
      dataSource={updatedDataSource}
      pagination={{
        pageSize: 10,
      }}
    />
    <CustomDrawer open={open} onClose={onClose} onSubmit={handleSubmit} title={updateId ?"Edit the course ": "Create New Course"}>

    </CustomDrawer>
    </>
  );
};

export default InstructorTable;
