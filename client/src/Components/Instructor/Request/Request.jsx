import React, { useEffect, useState } from "react";
import CustomTable from "../../Common/CustomTable";
import { DELETE, GET } from "../../ApiFunction/ApiFunction";
import CustomModal from "../../Common/CustomModal";
import CustomButton from "../../Common/CustomButton";
import CustomInput from "../../Common/CustomInput";
import { useCustomMessage } from "../../Common/CustomMessage";
import TextArea from "antd/es/input/TextArea";
const Request = () => {
  const [request, setRequest] = useState([]);
  const [reason, setReason] = useState("");
  const showMessage = useCustomMessage();
  const [modalData, setModalData] = useState({ data: null, condition: null });
  const fetch = async () => {
    const res = await GET(`${process.env.REACT_APP_BACKEND_URL}/getRequests`);
    setRequest(res);
  };

  useEffect(() => {
    fetch();
  }, []);
  const header = [
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Requested",
      dataIndex: "requestat",
      key: "requestat",
      render: (text) => (
        <small className="text-gray-500">{text ? text : "- - -"}</small>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <small
          className={
            text
              ? "text-amber-600 bg-amber-50 py-1 rounded-full px-2"
              : "text-gray-700"
          }
        >
          {text ? text : "- - -"}
        </small>
      ),
    },
  ];
  console.log(reason);

  const handleRequest = async (reqId, data) => {
    const { _id } = data;
    console.log(reqId);
    if (!reason) {
      showMessage("info", "Remark is required");
    }

    const res = await DELETE(
      `${process.env.REACT_APP_BACKEND_URL}/deletecourse/${_id}&${reqId}`
    );
    fetch();
  };

  return (
    <div className="grid gap-4">
      <h1 className="lg:text-2xl text-base font-light text-gray-500 tracking-wide">
        Request
      </h1>
      <CustomTable
        columns={header}
        data={request}
        approveBtn
        viewModal={(v, i) => {
          setModalData({ data: v, condition: i });
        }}
      />
      <CustomModal
        open={modalData.data}
        width={400}
        title={
          modalData.condition === 1 ? "Confirm Approval" : "Confirm Rejection"
        }
        footer={
          <div className="flex gap-2">
            <CustomButton
              className="flex-1"
              onClick={() => {
                setModalData({});
                setReason("");
              }}
            >
              Cancel
            </CustomButton>
            <CustomButton
              className={`flex-1 !text-white ${
                modalData.condition === 1
                  ? "!bg-green-500/90 hover:!bg-green-500"
                  : "!bg-red-500/90 hover:!bg-red-500"
              }`}
              onClick={() => handleRequest(modalData.condition, modalData.data)}
            >
              {modalData.condition === 1 ? "Approve" : "Reject"}
            </CustomButton>
          </div>
        }
      >
        <div className="min-h-32 grid gap-2 my-4">
          <TextArea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter Comment"
            className=""
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default Request;
