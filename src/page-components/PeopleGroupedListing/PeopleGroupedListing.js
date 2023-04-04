import React from "react";
import PropTypes from "prop-types";
import PeopleListing from "page-components/PeopleListing/PeopleListing";
import "./PeopleGroupedListing.scss";

export default function PeopleGroupedListing({ groupByInOrder }) {
  return (
    <div className="people-grouped-listing">
      {groupByInOrder.map(grouping => {
        const propsToPassThrough = { [grouping.key]: grouping.value };
        return (
          <div className="people-group" key={grouping.value}>
            {grouping.label && (
              <h6 className="group-label">{grouping.label}</h6>
            )}
            <div className="group-list">
              <PeopleListing {...propsToPassThrough} showMemberType />
            </div>
          </div>
        );
      })}
    </div>
  );
}

PeopleGroupedListing.propTypes = {
  groupByInOrder: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
};
