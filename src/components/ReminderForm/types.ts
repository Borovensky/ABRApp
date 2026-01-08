export type ReminderFormValues = {
  title: string;
  description: string;
};

export type ReminderFormProps = {
  initialTitle?: string;
  initialDescription?: string;
  loading?: boolean;
  onSubmit: (values: ReminderFormValues) => Promise<void> | void;
};


