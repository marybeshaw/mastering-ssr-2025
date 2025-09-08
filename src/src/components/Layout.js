"use server";

import React from "react";
import IndicatorIcon from "./IndicatorIcon";

// Define the component type for this page/component
const COMPONENT_TYPE = "server";

const Layout = ({ children }) => (
  <div className={COMPONENT_TYPE}>
    <IndicatorIcon
      type={COMPONENT_TYPE}
      name="Layout"
      className="layout-indicator-icon"
    />
    <header>
      <h1>
        Mastering Server-Side Development for React Developers - Demo Project
      </h1>
    </header>

    <div className="legend">
      <span className="legend-item client">
        <span className="legend-label">Client-only</span>
        <IndicatorIcon
          type="client"
          name="Client"
          size={18}
          className="legend-icon"
        />
      </span>
      <span className="legend-item server">
        <span className="legend-label">Server-only</span>
        <IndicatorIcon
          type="server"
          name="Server"
          size={18}
          className="legend-icon"
        />
      </span>
      <span className="legend-item hybrid">
        <span className="legend-label">Hybrid (SSR + Client)</span>
        <IndicatorIcon
          type="hybrid"
          name="Hybrid"
          size={18}
          className="legend-icon"
        />
      </span>
    </div>
    <main>{children}</main>
    <footer>
      <small>&copy; 2025 Mastering SSR</small>
    </footer>
  </div>
);

export default Layout;
