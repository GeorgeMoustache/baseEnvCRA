import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import { StyleLoading } from './style'
// actions
import { loadingClose } from '@actions'

const Loading = () => {
  const dispatch = useDispatch()
  const enabled = useSelector((state) => state.loading)

  useEffect(() => {
    if (enabled) {
      setTimeout(() => {
        dispatch(loadingClose())
      }, 3000)
    }
  }, [enabled, dispatch])

  if (enabled) {
    return (
      <StyleLoading>
        <div id='circularG'>
          <div id='circularG_1' className='circularG'></div>
          <div id='circularG_2' className='circularG'></div>
          <div id='circularG_3' className='circularG'></div>
          <div id='circularG_4' className='circularG'></div>
          <div id='circularG_5' className='circularG'></div>
          <div id='circularG_6' className='circularG'></div>
          <div id='circularG_7' className='circularG'></div>
          <div id='circularG_8' className='circularG'></div>
        </div>
      </StyleLoading>
    )
  } else {
    return null
  }
}

export default Loading
