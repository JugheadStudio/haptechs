import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addNotification, setLoading } from "../store/notificationSlice";
import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl, CircularProgress, FormHelperText } from "@mui/material";

type FormInputs = {
  name: string;
  email: string;
  product: string[];
  message?: string;
  terms: boolean;
};

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.notifications.loading);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      product: [],
      message: "",
      terms: false,
    },
  });

  const onSubmit = async (data: FormInputs) => {
    dispatch(setLoading(true));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(
        addNotification({
          id: Date.now(),
          type: "success",
          message: "Form submitted successfully!",
        })
      );

      reset();
    } catch (error) {
      dispatch(
        addNotification({
          id: Date.now(),
          type: "error",
          message: "Failed to submit the form. Please try again.",
        })
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Name is required.",
          minLength: { value: 2, message: "Name must be at least 2 characters." },
        }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.name} className="!mb-4">
            <TextField {...field} label="Name" variant="outlined" fullWidth error={!!errors.name} />
            <FormHelperText
              sx={{
                visibility: errors.name ? "visible" : "hidden",
                height: "20px",
                margin: "0",
              }}
              error
            >
              {errors.name?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address.",
          },
        }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.email} className="!mb-4">
            <TextField {...field} label="Email" variant="outlined" fullWidth error={!!errors.email} />
            <FormHelperText
              sx={{
                visibility: errors.email ? "visible" : "hidden",
                height: "20px",
                margin: "0",
              }}
              error
            >
              {errors.email?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        name="product"
        control={control}
        rules={{ required: "Please select at least one product." }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.product} className="!mb-4">
            <TextField {...field} select label="Product" variant="outlined" fullWidth defaultValue="" helperText={errors.product ? errors.product.message : "Please select a product"} error={!!errors.product} onChange={(e) => field.onChange(e.target.value)}>
              <MenuItem value="HapSphere">HapSphere</MenuItem>
              <MenuItem value="AR ProLens">AR ProLens</MenuItem>
              <MenuItem value="VirtuPad">VirtuPad</MenuItem>
              <MenuItem value="SenseGlove X">SenseGlove X</MenuItem>
            </TextField>
          </FormControl>
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          maxLength: { value: 500, message: "Message cannot exceed 500 characters." },
        }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.message} className="!mb-4">
            <TextField {...field} label="Message" variant="outlined" fullWidth multiline rows={4} error={!!errors.message} />
            <FormHelperText
              sx={{
                visibility: errors.message ? "visible" : "hidden",
                height: "20px",
                margin: "0",
              }}
              error
            >
              {errors.message?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        name="terms"
        control={control}
        rules={{
          required: "You must accept the terms and conditions.",
        }}
        render={({ field }) => <FormControlLabel control={<Checkbox {...field} checked={field.value} />} label="I accept the terms and conditions." />}
      />

      <FormHelperText error={!!errors.terms} className="text-red-500 text-sm mt-2 !mb-3" sx={{ visibility: errors.terms ? "visible" : "hidden", height: "20px", margin: "0" }}>
        {errors.terms?.message}
      </FormHelperText>

      <Button type="submit" variant="contained" disabled={loading} className="w-full !bg-pink text-white">
        {loading ? <CircularProgress size={24} style={{ color: "black" }} /> : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
