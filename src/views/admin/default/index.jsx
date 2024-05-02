import MiniCalendar from "components/calendar/MiniCalendar";
import { MdBarChart } from "react-icons/md";
import { columnsDataComplex } from "./variables/columnsData";
import Widget from "components/widget/Widget";
import ComplexTable from "views/admin/default/components/ComplexTable";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Grievances"}
          subtitle={"100"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Solved Grievances"}
          subtitle={"70"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Pending Grievances"}
          subtitle={"30"}
        />
      </div>


      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
