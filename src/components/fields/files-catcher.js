import React, { memo, useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { setFile } from '../../redux/form'
import { useDispatch } from 'react-redux'

const DragWatcher = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const FilesCatcherWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 10px;
  border: 1px dashed #cccccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
`

const ChildrenWrap = styled.div`
  position: relative;
`

const Header1 = styled.h1`
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 0;
  font-weight: normal;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
`

function FilesCatcher({ name, children }) {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const dropDepth = useRef(0)

  const handleDragEnter = useCallback(() => {
    if (dropDepth.current === 0) {
      setVisible(true)
    }
    dropDepth.current++
  }, [dropDepth])
  const handleDragLeave = useCallback(() => {
    dropDepth.current--
    if (dropDepth.current === 0) {
      setVisible(false)
    }
  }, [dropDepth])
  const handleDragOver = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()
  }, [])
  const handleDrop = useCallback(
    event => {
      dispatch(setFile({ field: name, files: event.dataTransfer.files }))
      dropDepth.current = 0
      setVisible(false)
      event.preventDefault()
      event.stopPropagation()
    },
    [dispatch, name]
  )

  return (
    <>
      <DragWatcher
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {visible && (
          <FilesCatcherWrap>
            <div>
              <Header1>Бросайте файлы сюда, я ловлю</Header1>
              <Description>
                Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls,
                pdf) и zip-архивы. Размеры файла до 5 МБ
              </Description>
            </div>
          </FilesCatcherWrap>
        )}
      </DragWatcher>
      <ChildrenWrap
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </ChildrenWrap>
    </>
  )
}

export default memo(FilesCatcher)
