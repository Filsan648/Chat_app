import Sidebar from "../sidebar/sidebar";
 import Nabar from "../navbar/navbar"; 
 import Discu from "../Discussion/discussion";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nabar/>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <Sidebar/>
    <Discu/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
    </div>
    </div>
  );
}