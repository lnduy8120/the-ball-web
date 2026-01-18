'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsPolicyPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'terms' | 'policy'>('terms');

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <header className="px-4 py-4 bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-lg font-bold text-slate-900">Điều khoản & Chính sách</h1>
        </div>

        <div className="flex p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'terms' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Điều khoản
          </button>
          <button
            onClick={() => setActiveTab('policy')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'policy' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Chính sách
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-slate-600 text-sm leading-relaxed space-y-4">
          {activeTab === 'terms' ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
              <h2 className="text-lg font-bold text-slate-900">1. Giới thiệu</h2>
              <p>Chào mừng bạn đến với ứng dụng Football Companion. Bằng việc truy cập và sử dụng ứng dụng này, bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây.</p>

              <h2 className="text-lg font-bold text-slate-900">2. Tài khoản người dùng</h2>
              <p>Bạn chịu trách nhiệm bảo mật thông tin tài khoản và mật khẩu của mình. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh do việc bạn không bảo mật thông tin này.</p>

              <h2 className="text-lg font-bold text-slate-900">3. Quyền sở hữu trí tuệ</h2>
              <p>Tất cả nội dung, hình ảnh, logo và dữ liệu trên ứng dụng đều thuộc quyền sở hữu của chúng tôi hoặc các bên cấp phép. Nghiêm cấm sao chép, phân phối lại mà không có sự đồng ý bằng văn bản.</p>

              <h2 className="text-lg font-bold text-slate-900">4. Hành vi bị cấm</h2>
              <p>Nghiêm cấm sử dụng ứng dụng cho các mục đích bất hợp pháp, lừa đảo, hoặc gây hại cho hệ thống. Chúng tôi có quyền khóa tài khoản vĩnh viễn nếu phát hiện vi phạm.</p>

              <h2 className="text-lg font-bold text-slate-900">5. Thay đổi điều khoản</h2>
              <p>Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được cập nhật trên ứng dụng.</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
              <h2 className="text-lg font-bold text-slate-900">1. Thu thập thông tin</h2>
              <p>Chúng tôi thu thập thông tin cá nhân mà bạn cung cấp khi đăng ký, bao gồm tên, email, số điện thoại và thông tin thanh toán.</p>

              <h2 className="text-lg font-bold text-slate-900">2. Sử dụng thông tin</h2>
              <p>Thông tin của bạn được sử dụng để cung cấp dịch vụ, xử lý giao dịch, gửi thông báo và cải thiện trải nghiệm người dùng.</p>

              <h2 className="text-lg font-bold text-slate-900">3. Chia sẻ thông tin</h2>
              <p>Chúng tôi cam kết không bán hoặc chia sẻ thông tin cá nhân của bạn cho bên thứ ba, trừ khi có yêu cầu từ cơ quan pháp luật hoặc để cung cấp dịch vụ thiết yếu.</p>

              <h2 className="text-lg font-bold text-slate-900">4. Bảo mật</h2>
              <p>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin cá nhân của bạn khỏi mất mát, truy cập trái phép hoặc tiết lộ.</p>

              <h2 className="text-lg font-bold text-slate-900">5. Quyền của bạn</h2>
              <p>Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa thông tin cá nhân của mình. Vui lòng liên hệ với bộ phận hỗ trợ để thực hiện các quyền này.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">Cập nhật lần cuối: 15/05/2024</p>
        </div>
      </main>
    </div>
  );
}