import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success(`Booking was successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: (error) => {
      console.error(error);
      toast.error(`Booking was NOT deleted`);
    },
  });

  return { deleteBooking, isDeletingBooking };
}
