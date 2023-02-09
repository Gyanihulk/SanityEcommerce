export const deleteProductById=async(id,client)=>{
    client
    .delete(id)
    .then(() => {
      console.log('Bike deleted')
    })
    .catch((err) => {
      console.error('Delete failed: ', err.message)
    })
}