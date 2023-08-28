import React from 'react';

/* eslint-disable react/prop-types */

const Education = ({ item }) => {
  return (
    <div className="cv-education">
      <div className="cv-title-2">
        <h3>Vzdělání</h3>
      </div>
      <section className="cv-timeline">
        <div className="cv-position">
          <h3>Česká zemědělská univerzita v Praze</h3>
          <h5>2014 - 2018</h5>
          <p>Informatika (Bc.)</p>
        </div>
        <div className="cv-position">
          <h3>Unicorn College</h3>
          <h5>2012 - 2013 (nedokončeno)</h5>
          <p>Informatika</p>
        </div>
        <div className="cv-position">
          <h3>SOŠ civilního letectví</h3>
          <h5>2007 - 2011</h5>
          <p>Letecký mechanik - elektronik</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
