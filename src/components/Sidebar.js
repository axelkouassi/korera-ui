import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        /* backgroundColor="#333" */
        /* className="col-md-12 d-none d-md-block sidebar"
        activeKey="/home" */
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          {/* <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a> */}
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/resource" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tools">Resource</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/project" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clipboard">Project</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/formula" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calculator">Formula</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
