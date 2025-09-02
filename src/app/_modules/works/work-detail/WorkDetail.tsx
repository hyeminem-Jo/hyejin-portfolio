'use client';

import React from 'react';

const WorkDetail = ({ id }: { id: string }) => {
  console.log(id);

  return <div>WorkDetail {id}</div>;
};

export default WorkDetail;
