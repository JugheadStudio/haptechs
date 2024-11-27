import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addNotification, setLoading } from "../store/notificationSlice";
import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl, CircularProgress } from "@mui/material";

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
    <form className="w-full max-w-lg mx-auto p-6 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-1xl font-sans mb-4">Contact Us</h2>

      <Controller
        name="name"
        control={control}
        rules={{
          required: "Name is required.",
          minLength: { value: 2, message: "Name must be at least 2 characters." },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            variant="outlined"
            fullWidth
            className="!mb-6"
            error={!!errors.name}
            helperText={errors.name?.message}
            onChange={(e) => {
              field.onChange(e);
            }}
          />
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
          <TextField
            {...field}
            className="!mb-6"
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            onChange={(e) => {
              field.onChange(e);
            }}
          />
        )}
      />

      <Controller
        name="product"
        control={control}
        rules={{
          required: "Please select at least one product.",
        }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.product} className="!mb-6">
            <InputLabel
              sx={{
                backgroundColor: "black",
                zIndex: 1,
              }}
            >
              Products
            </InputLabel>
            <Select
              {...field}
              onChange={(e) => field.onChange(e)}
              sx={{
                textAlign: "left",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Optional: limit max height of dropdown menu
                  },
                },
              }}
            >
              <MenuItem value="HapSphere">HapSphere</MenuItem>
              <MenuItem value="AR ProLens">AR ProLens</MenuItem>
              <MenuItem value="VirtuPad">VirtuPad</MenuItem>
              <MenuItem value="SenseGlove X">SenseGlove X</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          maxLength: { value: 500, message: "Message cannot exceed 500 characters." },
        }}
        render={({ field }) => <TextField {...field} label="Message" variant="outlined" fullWidth multiline rows={4} error={!!errors.message} helperText={errors.message?.message} onChange={(e) => field.onChange(e)} />}
      />

      <Controller
        name="terms"
        control={control}
        rules={{
          required: "You must accept the terms and conditions.",
        }}
        render={({ field }) => <FormControlLabel className="!mb-6" control={<Checkbox {...field} checked={field.value} />} label="I accept the terms and conditions." />}
      />
      {errors.terms && <p className="text-red-500 text-sm mb-4">{errors.terms.message}</p>}

      <Button type="submit" variant="contained" color="primary" disabled={loading} className="w-full">
        {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
