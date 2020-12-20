import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import { setSession } from '../../store/actions';
import { getSession, getEmptyData } from '../../store/selectors';

export default function ToggleSession() {
  const dispatch = useDispatch();
  const session = useSelector(getSession);

  const options = [
    { label: 'Pre', value: 'Pre' },
    { label: 'Post', value: 'Post' },
  ];

  const onChange = useCallback(
    (e) => dispatch(setSession(e.target.value)),
    [dispatch],
  );

  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      value={session}
      optionType="button"
      size="small"
      disabled={true}
    />
  );
}
