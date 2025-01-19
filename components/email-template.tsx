import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    name,
    email,
}) => (
    <html>
        <body className="font-sans bg-gray-50 text-gray-800">
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    🎉🎉🎉 New Mailing List Signup! 🎉🎉🎉
                </h1>

                {/* Message */}
                <p className="mb-6">
                    Someone has just signed up for the <strong>CrafteDesignz</strong>{" "}
                    mailing list. Here are their details:
                </p>

                {/* User Details */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Name:</label>
                    <p className="text-gray-700">{name}</p>
                </div>

                <div className="mb-4">
                    <label className="font-semibold block mb-1">Email:</label>
                    <p className="text-gray-700">{email}</p>
                </div>

                {/* Footer */}
                <p className="text-sm text-gray-600">
                    This email was sent to notify you of a new signup on your website.
                </p>
            </div>
        </body>
    </html>
);
