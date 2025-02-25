// components/DriverForm.tsx
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { useContactForm } from "@/app/contact/useContactForm";

// Form validation schema
const driverFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(8, "Please enter a valid phone number"),
  licenseNumber: z.string().min(3, "Please enter a valid license number"),
  experienceYears: z.string().min(1, "Please select your years of experience"),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  availability: z.string().min(1, "Please select your availability"),
  message: z.string().optional(),
});

type DriverFormData = z.infer<typeof driverFormSchema>;

export const DriverForm = () => {
  const { handleSubmit, statusMessage, loading } = useContactForm();

  // Initialize form with validation schema
  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      licenseNumber: "",
      experienceYears: "",
      vehicleType: "",
      availability: "",
      message: "",
    },
  });

  // Reset form when submission is successful
  useEffect(() => {
    if (statusMessage.text && !statusMessage.isError) {
      form.reset();
    }
  }, [statusMessage, form]);

  // Reset status message when form changes
  // Reset status message when form changes
  useEffect(() => {
    const subscription = form.watch(() => {
      if (statusMessage.text) {
        // Reset status logic here if needed
      }
    });
    return () => subscription.unsubscribe();
  }, [form, statusMessage]);
  const onSubmit = (data: DriverFormData) => {
    handleSubmit({
      ...data,
      position: "Professional Driver",
      message: data.message || "No additional information provided.",
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Driver Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're looking for experienced drivers to join our growing team.
            Complete the form below to apply.
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-orange-500 text-white rounded-t-xl">
            <CardTitle className="text-2xl">Driver Application Form</CardTitle>
            <CardDescription className="text-orange-100">
              All fields marked with * are required
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information Section */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Personal Information
                    </h3>
                  </div>

                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John Doe"
                            className="h-12 focus-visible:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@example.com"
                            className="h-12 focus-visible:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+254 700 000 000"
                            className="h-12 focus-visible:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Driver Information Section */}
                  <div className="md:col-span-2 mt-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Driver Information
                    </h3>
                  </div>

                  {/* License Number */}
                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Driver's License Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="ABC123456"
                            className="h-12 focus-visible:ring-orange-500"
                          />
                        </FormControl>
                        <FormDescription>
                          Enter your valid driver's license number
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Experience */}
                  <FormField
                    control={form.control}
                    name="experienceYears"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Years of Experience *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 focus-visible:ring-orange-500">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map(
                              (num) => (
                                <SelectItem
                                  key={num.toString()}
                                  value={num.toString()}
                                >
                                  {typeof num === "number"
                                    ? `${num} year${num > 1 ? "s" : ""}`
                                    : "10+ years"}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Vehicle Type */}
                  <FormField
                    control={form.control}
                    name="vehicleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Vehicle Type *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 focus-visible:ring-orange-500">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tanker">Fuel Tanker</SelectItem>
                            <SelectItem value="trailer">
                              Heavy Trailer
                            </SelectItem>
                            <SelectItem value="truck">Cargo Truck</SelectItem>
                            <SelectItem value="van">Delivery Van</SelectItem>
                            <SelectItem value="other">
                              Other (Specify in message)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Availability */}
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">
                          Availability *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 focus-visible:ring-orange-500">
                              <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="full-time">Full Time</SelectItem>
                            <SelectItem value="part-time">Part Time</SelectItem>
                            <SelectItem value="weekends">
                              Weekends Only
                            </SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="flexible">
                              Flexible Hours
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Information Section */}
                  <div className="md:col-span-2 mt-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Additional Information
                    </h3>
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="font-medium">
                          Additional Information
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us about your driving experience, certifications, specialized skills or any other relevant information..."
                            className="min-h-[150px] focus-visible:ring-orange-500"
                          />
                        </FormControl>
                        <FormDescription>
                          Include any relevant certifications, special driving
                          skills, or past experience that may be beneficial
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Status Message */}
                {statusMessage.text && (
                  <Alert
                    className={
                      statusMessage.isError
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "bg-green-50 border-green-200 text-green-800"
                    }
                  >
                    <AlertDescription>{statusMessage.text}</AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium transition-all duration-200 transform hover:translate-y-[-2px]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-gray-500">
          <p>
            By submitting this application, you consent to our team reviewing
            your information. We respect your privacy and will only use your
            data for recruitment purposes.
          </p>
        </div>
      </div>
    </section>
  );
};
