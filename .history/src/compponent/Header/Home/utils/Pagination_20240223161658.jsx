import React from 'react'

const Pagination = () => {
  return (
    <Stack spacing={2} className="align-contnet-center " color="warning">
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      color="warning"
      className="text-light"
    />
  </Stack>
  )
}

export default Pagination
