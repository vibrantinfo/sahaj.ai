import React from "react";
import "./OurAccelerators.scss";
import { Link } from "gatsby"

export default function OurAccelerators() {
    return (
        <div className="accelerators-ctr">
          <div className="accelerator clamp">
            <h3>Clamp</h3>
            <p>
            Clamp is a microservices orchestration and workflow manager. It spearheads the idea that orchestration-based distributed architecture results in readable and scalable system design. Clamp distills industry best practices and our learnings from building distributed architectures at scale over years. It is opinionated yet flexible to work with greenfield distributed services as well as facilitate monolith's transition to microservices.
            </p>
            <div className="link">
                <Link to="https://clamp-orchestrator.github.io/clamp-orchestrator/" target="_blank">Know more</Link>
            </div>
          </div>
        </div>
      );
}