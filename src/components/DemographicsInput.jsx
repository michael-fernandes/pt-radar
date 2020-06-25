import React from 'react';
import { Modal } from 'antd';

import SingleInput from '../ui/SingleInput';
import {
  AGE,
  COGNITIVE_STATUS,
  SEX,
  DEMOGRAPHICS_DIMENSION,
} from '../resources/constants';

export default function DemographicsInput({ setVisibility, visible }) {
  return (
    <Modal
      title="Demographics Data"
      visible={visible}
      onOk={() => setVisibility(false)}
      onCancel={() => setVisibility(false)}
    >
      <div>
        <SingleInput label={COGNITIVE_STATUS} type={DEMOGRAPHICS_DIMENSION} />
        <SingleInput label={AGE} type={DEMOGRAPHICS_DIMENSION} />
        <SingleInput label={SEX} type={DEMOGRAPHICS_DIMENSION} />
      </div>
    </Modal>
  )
}
