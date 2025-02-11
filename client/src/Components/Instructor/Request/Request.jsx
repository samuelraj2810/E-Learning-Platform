import React, { useEffect, useState } from "react";
import CustomTable from "../../Common/CustomTable";
import { GET } from "../../ApiFunction/ApiFunction";
import CustomModal from "../../Common/CustomModal";
import CustomButton from "../../Common/CustomButton";
import CustomInput from "../../Common/CustomInput";
import { useCustomMessage } from "../../Common/CustomMessage";
const Request = () => {
  const [request, setRequest] = useState([]);
  const [reason, setReason] = useState(null);
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
      dataIndex: "requested",
      key: "requested",
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

  const handleRequest = (condition) => {
    if (!reason) {
      showMessage("info", "Remark is required");
    }
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
              color="danger"
              className="flex-1"
              onClick={() => setModalData({})}
            >
              Cancel
            </CustomButton>
            <CustomButton
              className="flex-1 bg-Primary/90 !text-white hover:!bg-Primary"
              onClick={() => handleRequest(modalData.condition)}
            >
              {modalData.condition === 1 ? "Approve" : "Reject"}
            </CustomButton>
          </div>
        }
      >
        <div className="min-h-4 grid gap-2 my-4">
          <CustomInput
            title={"Reason"}
            required
            onChange={(e) => setReason(e)}
            placeholder="Enter Reason"
            className="!h-20"
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default Request;
