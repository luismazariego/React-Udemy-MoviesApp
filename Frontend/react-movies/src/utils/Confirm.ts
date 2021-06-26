import Swal from "sweetalert2";

export default function Confirm(
  onConfirm: any,
  title = "Are you sure you want to delete this record?",
  confirmButtonText = "Delete"
) {
    Swal.fire({
        title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText
    }).then(result => {
        if (result.isConfirmed) {
            onConfirm();
        }
    })
}
