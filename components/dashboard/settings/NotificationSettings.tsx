import React from "react";

export default function NotificationSettings() {
  const notifications = [
    {
      label: "Email notifications",
      desc: "Receive email updates about your tasks",
    },
    {
      label: "Task updates",
      desc: "Get notified when tasks are updated",
    },
    {
      label: "New applications",
      desc: "Get notified when providers apply to your tasks",
    },
    {
      label: "Marketing emails",
      desc: "Receive tips and product updates",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold font-sora text-gray-900 mb-2">
          Notification Preferences
        </h3>
        <p className="text-sm text-gray-500">
          Choose how you want to be notified about activity.
        </p>
      </div>
      {notifications.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">{item.label}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={i < 3}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      ))}
    </div>
  );
}
